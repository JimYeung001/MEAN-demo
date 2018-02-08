var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book');

// Get all books
router.get('/', function(req, res, next){
    // res.send('Express RESTful API');
    Book.find(function(err, products){
        if(err) return next(err);
        res.json(products);
    });    
});

//Find book by ID
router.get('/:id', function(req, res, next){
    Book.findById(req.params.id, function(err, products){
        if(err) return next(err);
        res.json(products);
    });    
});

//Get Single book by id
router.post('/', function(req, res, next){
    Book.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//Update book
router.put('/:id', function(req, res, next){
    Book.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

//Delete book
router.delete('/:id', function(req, res, next){
    Book.findByIdAndRemove(req.params.id, req.Book, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
})

module.exports = router;