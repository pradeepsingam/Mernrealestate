import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hasedPassword = await bcryptjs.hash(password, 12);
    const user = new User({ username, email, password : hasedPassword });
    
    try {
        await user.save();
        res.status(201).json("User created successfully")
    } catch(error) {
       next(error);
    }
   
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const validUser = await User.findOne({ email });
        if(!validUser) return next(errorHandler(404, "user not found"));
        const validPassword = await bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, "Wrong credentials"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    }catch(error) {
        next(error);
    }
}
