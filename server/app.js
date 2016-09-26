/**
 * Created by METALuga on 9/25/2016.
 */
const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    db.collection('books').find().toArray((err, result) => {
        if (err) {
            return console.log(err);
        }
        // renders index.ejs
        res.render('index.ejs', {books: result});
    })
});

app.post('/books', (req, res) => {
    db.collection('books').save(req.body, (err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log('saved to database');
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
            res.send('Selected item was successfully deleted.')
        })
});

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