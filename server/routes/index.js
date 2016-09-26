/**
 * Created by METALuga on 9/26/2016.
 */
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    req.db.collection('quotes').find().toArray((err, result) => {
        if (err) {
            return console.log(err);
        }
        // renders index.ejs
        res.render('index.ejs', {quotes: result});
    })
});

module.exports = router;