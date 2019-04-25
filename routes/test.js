var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "iot_system"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

/* GET users listing. */
router.get('/', function(req, res, next) {
    con.query("SELECT * FROM test", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.render('test', {value: result});
      });
    
});

router.post('/', function(req, res, next) {

    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
        var sql = `INSERT INTO test (val) VALUES ('${req.body.value}')`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          res.redirect("/test")
        });
    //     con.end();
    //   });
    

    
  });

module.exports = router;

