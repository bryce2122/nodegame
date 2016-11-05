var express = require('express');
var app = express();
app.use(express.static('public'));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

// TextCell.prototype.minWidth = function() {
//   return this.text.reduce(function(width, line) {
//     return Math.max(width, line.length);
//   }, 0);
// };
// TextCell.prototype.minHeight = function() {
//   return this.text.length;
// };

// function rowHeights(rows) {
//   return rows.map(function(row) {
//     return row.reduce(function(max, cell) {
//       return Math.max(max, cell.minHeight());
//     }, 0);
//   });
// }

// function colWidths(rows) {
//   return rows[0].map(function(_, i) {
//     return rows.reduce(function(max, row) {
//       return Math.max(max, row[i].minWidth());
//     }, 0);
//   });
// }

// arr = []
//  arr.push(["Kilimanjaro","5895", "Tanzania"])
// arr.push(["Everest","8848","Nepal"])
// arr.push(["Mount Fuji","3776", "Japan"])
// arr.push(["Mont Blanc","4808","Italy/France"])
// arr.push(["Vaalserberg", "323","Netherlands"])
// arr.push(["Denali","6168","United States"])
// arr.push(["Popocatepetl","5465","Mexico"])

// console.log(arr);