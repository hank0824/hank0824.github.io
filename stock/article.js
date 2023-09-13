var express = require('express');
var articleRouter = express.Router();
var db = require('./app')


articleRouter.get('/', function (req, res) {
    db.exec(`SELECT * FROM article`, [], function (data, fields) {
        var contentSimple=data[0].content.replace(/<\/?.+?>/g,'').replace(/ /g,'').substring(0,58);
        var likeShow = (data[0].likes === null) ? 0 : data[0].likes;

        res.render('article', {
            title: data[0].title,
            contentSimple: contentSimple,
            likes: likeShow
        })
    })
})

articleRouter.get('/:aid', function (req, res) {
    db.exec(`SELECT * FROM article WHERE aid=?`, [req.params.aid], function (data, fields) {
        // console.log(data[0])
        var likeShow = (data[0].likes === null) ? 0 : data[0].likes;

        res.render('InsidePages', {
            title: data[0].title,
            content: data[0].content,
            likes: likeShow,
            creatTime: data[0].cteatTime
        })
    })
})









module.exports = articleRouter;