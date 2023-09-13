// http://localhost/phpmyadmin/
// http://127.0.0.1:2407/
// http://127.0.0.1:2407/article  //文章頁面路徑

var express = require('express');
var app = express();
app.use(express.json());

var cors = require('cors');
var x = cors();
app.use(x);
const port = 2407;

app.listen(port, function () {
    console.log('伺服器啟動中' + new Date().toLocaleTimeString());
})


var mysql = require('mysql');
var myDBconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stock',
    multipleStatements: true,
})

myDBconn.connect(function (err) {
    if (err) {
        console.log('資料庫有問題:');
        console.log(err);
    } else {
        console.log('資料庫Ok');
    }
})

//輸出資料庫
exports.exec = (sql, data, callback) => {
    myDBconn.query(sql, data, function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        callback(results, fields);
    })
}

//ejs
app.set('view engine', 'ejs');

//靜態檔設定
app.use(express.static('public'));

//article路由
var articleRouter = require('./article')
app.use('/article', articleRouter)

//stock路由
app.get('/stock',function(req,res){
    res.render('stock.ejs')
})

//index路由
app.get('/',function(req,res){
    res.render('index.ejs')
})






// 成交量前5名
app.get("/volume", function (req, res) {
    myDBconn.query("Select * From volume join stock_total on volume.StockNumber = stock_total.StockNumber ORDER BY `volume`.`Rank`; ", [],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})
// 漲幅前5名
app.get("/up", function (req, res) {
    myDBconn.query("Select * From up join stock_total on up.StockNumber = stock_total.StockNumber ORDER BY `up`.`Rank`; ", [],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})
// 跌幅前5名
app.get("/down", function (req, res) {
    myDBconn.query("Select * From down join stock_total on down.StockNumber = stock_total.StockNumber ORDER BY `down`.`Rank`; ", [],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})
// 成交金額前五名
app.get("/turnover", function (req, res) {
    myDBconn.query("Select * From turnover join stock_total on turnover.StockNumber = stock_total.StockNumber ORDER BY `turnover`.`Rank`; ", [],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})
// 查詢股票名稱及代號
app.get("/select", function (req, res) {
    myDBconn.query("SELECT * FROM `stock_total` ORDER BY `StockNumber` DESC", [],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})

// 查詢該股票詳細資料
app.get("/Search/:id", function (req, res) {
    myDBconn.query("SELECT * FROM `stock_total`WHERE StockNumber = ? ; ", [req.params.id],
        function (err, rows) {
            res.send(JSON.stringify(rows))
        }
    )
})

//新增自選股
app.post("/CreateCollect", function (req, res) {
    myDBconn.query("INSERT INTO `collect` ( `uid`, `StockNumber`) VALUES  (?, ?)",
        [req.body.uid, req.body.StockNumber],
        function (err, rows) {
            if (rows.affectedRows) {
                res.end(
                    JSON.stringify(('update success'))
                )
            } else {
                res.end(
                    JSON.stringify(('update failed'))
                )
            }}
    )
})
//刪除自選股
app.post("/update", function (req, res) {
    myDBconn.query("update `collect` set  CollectState = ? where StockNumber = ? AND uid = ? ",
        [req.body.CollectState, req.body.StockNumber, req.body.uid],
        function (err, rows) {
            if (rows.affectedRows) {
                res.end(
                    JSON.stringify(('update success'))
                )
            } else {
                res.end(
                    JSON.stringify(('update failed'))
                )
            }}

    )
})

//查詢自選股
app.get("/Search/collect/:id", function (req, res) {
    myDBconn.query("Select * From collect LEFT join stock_total on collect.StockNumber = stock_total.StockNumber LEFT join member on member.uid = collect.uid WHERE  collect.uid=? AND Collect.CollectState='1'; ", [req.params.id],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})
