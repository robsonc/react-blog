const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const postSchema = new mongoose.Schema({
    title: String,
    date: Date,
    excerpt: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

const app = new express();

app.use(bodyParser.json());
app.use(methodOverride())

mongoose.connect('mongodb://localhost:27017/reactblog', {
    useMongoClient: true
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });  

app.get('/api/posts', function(req, res) {
    Post.find({}, function(err, posts){
        if(err) res.status(500).end('Ocorreu um erro inesperado');
        res.json(posts);
    })
})

app.delete('/api/posts/:_id', function(req, res){
    Post.findById(req.params._id, function(err, post) {
        if (err) res.status(500).end('Erro inesperado ' + err)
        post.remove(function(err, post) {
            res.json(post)
        })
    })
})

app.post('/api/posts/:_id', function(req, res) {
    Post.findOneAndUpdate({_id: req.params._id}, {
        '$set': {
            title: req.body.title,
            excerpt: req.body.excerpt,
            content: req.body.content
        }
    }, { new: true }, function(err, post){
        if(err) res.status(500).end({error: err});
        res.json(post);
    })
})

app.get('/api/posts/:_id', function(req, res) {
    Post.findOne({_id: req.params._id}, function(err, post){
        if(err) res.status(500).end('Ocorreu um erro inesperado');
        res.json(post);
    })
})

app.post('/api/posts', function(req, res) {
    let post = new Post({
        title: req.body.title,
        excerpt: req.body.excerpt,
        content: req.body.content
    });

    post.save(function(err, post) {
        if (err) res.status(500).end('Ocorreu um erro inesperado')
        res.json(post);
    });
});

app.listen(3005, function() {
    console.log('React blog server is on 3005')
});