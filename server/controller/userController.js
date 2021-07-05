import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// REGISTER
export const signup = async (req, res) => {
    try {
        const {name, email , password, passwordVerify} = req.body;

        if(!name || !email || !password || !passwordVerify) {
            return res
            .status(400)
            .json({errorMessage: "please enter required fields!"});
        }

        const isUserExist = await User.findOne({email});
        if (isUserExist) {
            return res.status(400).json({errorMessage: "User already exists."})
        }

        // hash password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // save user to the database
        const newUser = new User({
            name: name, email: email, password: passwordHash
        })

        const savedUser = await newUser.save();

        // logged the user in
        const token = jwt.sign({ user: savedUser._id}, process.env.SECRET_KEY, {expiresIn: "1d"});

        // send the toek in http-only cookie 
        res.cookie("token", token, {httpOnly: true }).send();

    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
};

// lOGIN
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body

        if(!email || !password) {
           return res.status(400)
            .json({errorMessage: "please enter required fields!"});
        }

        //  check user
        const existingUser = await User.findOne({email});

        if(!existingUser) {
            return res.status(401)
            .json({errorMessage: "Wrong email or password."});
        }

        // check password
        const correctPassword = await bcrypt.compare(password, existingUser.password);
        if(!correctPassword) {
            return res.status(401)
            .json({errorMessage: "Wrong email or password."});
        }

        // logged the user in
        const token = jwt.sign({ user: existingUser._id}, process.env.SECRET_KEY, {expiresIn: "1d"} );

        // send the toek in http-only cookie 
        res.cookie("token", token, {httpOnly: true }).send();

    } catch(err) {
        console.log(err);
        res.status(500).send();
    }

};

// LOGOUT 
export const signout = async (req, res) => {
    try {
        res.cookie("token", "", {httpOnly: true, expires: new Date(0)}).send();

    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
};