/* eslint-disable semi */
/* eslint-disable eol-last */
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {jwtkey} = require('../keys');

//client header mai banake bhjega token
module.exports = (req,res,next) => {
    const {authorization} = req.headers;
    if(!authorization) {return res.status(401).send({error:'you must logged in'})}
    const token = authorization.replace('Bearer ','');
    jwt.verify(token,jwtkey,async(err,payload)=>{
        if(err){
            return res.status(401).send({error:'you must logged in'});
        }
        const {userId} = payload;
        const user = await User.findById(userId);
        req.user = user;
        next();
    });
};