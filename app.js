// Basic required imports for Node.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');

const upload = multer({
    dest: 'uploads/'
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), (req, res, next) => {

});

app.listen(4000, function() {
    console.log("Working");
});