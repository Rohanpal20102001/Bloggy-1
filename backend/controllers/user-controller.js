import { response } from 'express';
import User from '../models/user-model';
import bcrypt from 'bcryptjs';

//As it is a database call so we must always use try catch block
export const getAllUser = async (req,res,next) => {
    let users;
    try {
        users = await User.find()
    }catch(err) {
        console.log("User Controller : " + err);
    }
    if(!users) {
        return res.status(404).json({message : "No User Found!!!"});
    }
    return res.status(200).json({users});
}
//Notes: New keyword in JavaScript is used to create an instance of an object that has a constructor function.
export const signup = async (req,res,next) => {
    const { name, email, password, blog } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    }catch(err) {
        return console.log("Signup Controller : " + err);
    }
    if(existingUser) {
        return res
            .status(400)
            .json({message : "User already exists, Login Instead!!!"})
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password : hashedPassword,
        blogs: []
    });

    try {
        await user.save();
    } catch(err) {
        return console.log("User Saving DB: " + err);
    }
    return res.status(201).json({user});
}


export const login = async (req,res,next) => {
    const { email, password, blog }  = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch(err) {
        return console.log(err);
    }

    if(!existingUser) {
        return res
        .status(404)
        .json({message : "Couldn't find user by Email!!!"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect) {
        return res.status(404).json({message : "Incorrect Password"});
    }

    return res.status(200).json({ message : "Login Successful"});
}