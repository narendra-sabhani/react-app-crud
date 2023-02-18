var express = require('express');
var app = express();
var fs = require("fs");
const multer  = require('multer');

var storage = multer.diskStorage(
   {
       destination: './build',
       filename: function (req, file, cb ) {
           cb( null, file.originalname);
       }
   }
);

const upload = multer({ storage: storage } );

app.get('/listUsers/get', function (req, res) {
    console.info("__dirname", __dirname);
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

// route for file upload
app.post("/api/uploadfile", upload.single('myFile'), (req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   console.log(req.file.originalname + " file successfully uploaded !!");
   res.sendStatus(200);
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})