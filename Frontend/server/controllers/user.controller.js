import { generateKey } from "crypto";
import { User } from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from "../utils/generateTokenandSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/email.js";


export const Signup = async(req,res) =>{
    const {email,password,name} = req.body;
    try {
        if(!email || !password || !name){
            throw new Error("All fields are required");
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            return res.status(400).json({success:false, message: "User already exists"});
        }

        const hashedPassword = await bcryptjs.hash(password,10);
        const verificationToken = Math.floor(10000 + Math.random() *900000).toString();


        const user = new User({
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt : Date.now() + 24 * 60 * 60 * 1000,
        })


        await user.save();

        // jwt 
        generateTokenAndSetCookie(res,user._id)

        await sendVerificationEmail(user.email,verificationToken);

        res.status(201).json({
            success:true,
            message:"User created Successfully",
            user :{
                ...user._doc,
                password: undefined
            }
        })


    } catch (error) {
        res.status(400).json({success:false, message: error.message})
    }
}

export const verifyEmail = async(req,res)=>{
    const {code} = req.body
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt : {$gt : Date.now() }

        })
        if(!user){
            return res.status(400).json({
                success:false,
                message: "Invalid or expired verification code"
            })
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save()

        await sendWelcomeEmail(user.email,user.name);
    } catch (error) {
        
    }
}


export const Login = async(req,res) =>{
    res.send("Login route")
}

export const Logout = async(req,res) =>{
    res.send("Logout route")
}