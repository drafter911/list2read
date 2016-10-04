/**
 * Created by METALuga on 9/25/2016.
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.static('public'));
app.use(express.static('../app/dist'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //db.collection('books').find().toArray((err, result) => {
    //    if (err) {
    //        return console.log(err);
    //    }
    // renders index.ejs
    //res.render('index.ejs', {books: result});
    res.render('index.html');
    //})
});


//BOOKS
app.get('/books/:_id', (req, res) => {
    var o_id = new ObjectId(req.params._id);

    db.collection('books').find({'_id':o_id}, function (err, cursor) {
        //console.log('RR: ', r);
        if (err) {
            return console.log(err);
        }
        cursor.toArray(function (e, result) {
            if (e) {
                return console.log(e);
            }
            res.send(result);
            //db.close();
        });
    })
});

app.get('/books', (req, res) => {
    db.collection('books').find().toArray((err, result) => {
        if (err) {
            return console.log(err);
        }
        // renders index.ejs
        //res.render('index.ejs', {books: result});
        //res.render('index.html', {books: result});
        res.send(result)
    })
});

app.post('/books', (req, res) => {
    db.collection('books').save(req.body, (err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log('book saved to database');
        res.redirect('/');
    })
});

app.put('/books', (req, res) => {
    db.collection('books')
        .findOneAndUpdate({title: req.body.itemToUpdate}, {
            $set: {
                author: req.body.author,
                title: req.body.title
            }
        }, {
            sort: {_id: -1},
            upsert: true
        }, (err, result) => {
            if (err) {
                return res.send(err)
            }
            res.send(result);
        })
});

app.delete('/books', (req, res) => {
    db.collection('books').findOneAndDelete({title: req.body.title},
        (err, result) => {
            if (err) return res.send(500, err);
            res.send('Selected book was successfully deleted.')
        })
});
//END_BOOKS

//ARTICLES
app.get('/articles/:_id', (req, res) => {
    var o_id = new ObjectId(req.params._id);

    db.collection('articles').find({'_id':o_id}, function (err, cursor) {
        //console.log('RR: ', r);
        if (err) {
            return console.log(err);
        }
        cursor.toArray(function (e, result) {
            if (e) {
                return console.log(e);
            }
            res.send(result);
            //db.close();
        });
    })
});
app.get('/articles', (req, res) => {
    db.collection('articles').find().toArray((err, result) => {
        if (err) {
            return console.log(err);
        }
        res.send(result)
    })
});

app.post('/articles', (req, res) => {
    db.collection('articles').save(req.body, (err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log('article saved to database');
        res.redirect('/');
    })
});

app.put('/articles', (req, res) => {
    db.collection('articles')
        .findOneAndUpdate({title: req.body.itemToUpdate}, {
            $set: {
                author: req.body.author,
                title: req.body.title
            }
        }, {
            sort: {_id: -1},
            upsert: true
        }, (err, result) => {
            if (err) {
                return res.send(err)
            }
            res.send(result);
        })
});

app.delete('/articles', (req, res) => {
    db.collection('articles').findOneAndDelete({title: req.body.title},
        (err, result) => {
            if (err) return res.send(500, err);
            res.send('Selected article was successfully deleted.')
        })
});
//END_ARTICLES


const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://list2read:list2read@ds041566.mlab.com:41566/list2read', (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen(4000, () => {
        console.log('listening on 4000');
    });

});

var findBookById = function(db, id, callback) {
    var cursor =db.collection('books').find( { "_id": id } );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};