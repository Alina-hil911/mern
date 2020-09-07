const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const upload = require('express-fileupload');


const app = express();
//Connect database
connectDB();

//init middleware
app.use(express.json({extended: false})) //accept data in body

//cors
app.use(cors())

app.use(upload())

const PORT = process.env.PORT || 5000;

//app.get('/', (req, res)=>res.json({"msg":"Welcome to the contact keeper"}));

//Define routes
app.use('/', require('./routes/films'));

app.listen(PORT, ()=>console.log(PORT))

// const express = require('express');
// const fileUpload = require('express-fileupload');
// const app = express();

// const PORT = 5000;
// app.use('/form', express.static(__dirname + '/index.html'));

// // default options
// app.use(fileUpload());



// app.listen(PORT, function() {
//   console.log('Express server listening on port ', PORT); // eslint-disable-line
// });