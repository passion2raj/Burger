const mysql = require("mysql");

var connection = mysql.createConnection({
  host:"localhost",
  port:"3306",
  user:"root",
  password : "Mysql@UCF100",
  database: "burgers_db"
});

connection.connect(function(err){
  if(err){
    console.log("error Connecting:" + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
