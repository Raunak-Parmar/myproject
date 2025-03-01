const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {jwtkey} = require('../keys');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        const token = jwt.sign({userId:user._id},jwtkey);
        res.status(201).send({token,message:'User registered successfully',  user: {
            id: user._id,
            name: user.name,
            email: user.email,
        }});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing up');
    }
});

router.post('/signin',async(req,res) => {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(422).send({error:'Enter all the fields like name, email, and password'});
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(422).send({error:'Enter email'});
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId:user._id},jwtkey);
        return res.send({token});
    }catch(err){
        return res.status(422).send({error:'Incorrect password'});
    }
});
const requireAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Get token from headers
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized: No token provided' });
        }

        const decoded = jwt.verify(token, jwtkey);
        req.userId = decoded.userId; // Attach userId to request
        next();
    } catch (error) {
        return res.status(401).send({ error: 'Unauthorized: Invalid token' });
    }
};

router.get('/profile', requireAuth, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('name email');
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.send({ user });
    } catch (error) {
        res.status(500).send({ error: 'Error fetching user data' });
    }
});

module.exports = router;
