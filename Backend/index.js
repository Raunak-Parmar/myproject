/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
const bodyParser = require('body-parser');
const mongoose = require('mongoose');   
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const {mongoUrl} = require('./keys');

require('./models/User');
const requireToken = require('./middleware/requireToken');
const authUser = require('./routes/authUser');
//middleware
app.use(bodyParser.json());
app.use(authUser);
app.use(cors());
app.use(express.json());

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

mongoose.connection.on('connected',()=>{
    console.log('Mongodb connected');
});
mongoose.connection.on('error',(err)=>{
    console.log('Error',err);
});

app.get('/',requireToken,(req,res)=>{
    res.send('Your email is' + req.user.email);
});

app.listen(PORT,()=>{
    console.log('Server Running');
});