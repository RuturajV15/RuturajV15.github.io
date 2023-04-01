const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Ruturaj',
  password: '',
});

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established sucessfully');
  var sql = "insert into weather(CityName, Temperature, WindSpeed, Humidity, Description) values ('Delhi', 22.05, 3.09, 68, 'Haze')";
  con.query(sql, function (err, result) {  
    if (error) throw error;  
    console.log("1 record inserted");
  });
});
connection.end((error) => {
});