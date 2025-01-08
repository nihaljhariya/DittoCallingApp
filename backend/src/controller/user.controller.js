import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

import httpStatus from "http-status";
import Meeting from "../models/meeting.model.js";
import crypto from "crypto";

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide" });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "user not found" });
    }

   let isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (isPasswordCorrect) {
      let token = crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();
      return res.status(httpStatus.OK).json({ token: token });
    }
    else{
      return res.status(httpStatus.UNAUTHORIZED).json({message: "Invalid Username or Password"})
    }
  } catch (e) {
    return res.status(500).json({ message: `Smething went wrong ${e}` });
  }
};
const register = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      // early return statements
      return res
        .status(httpStatus.FOUND)
        .json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(httpStatus.CREATED).json({ message: "User Registered" });
  } catch (e) {
    res.json({ message: `Something went Wrong ${e}` });
  }
  
};
const getUserHistory = async (req,res)=>{
  const {token}= req.query;
  try{
    const user = await User.findOne({token:token});
    const meetings = await Meeting.find({user_id : user.username})
    res.json(meetings)
  }catch(e){
      res.json({message:`something went wrogn ${e}`})
  }
 }
 

 const addToHistory =async(req,res)=>{
  const {token , meeting_code}= req.body;
  try{
    const user = await User.findOne({token : token});
    const newMeeting = new Meeting({
      user_id : user.username,
      meetingCode : meeting_code
    })
    await newMeeting.save();
    res.status(httpStatus.CREATED).json({message:"Added to History"})
  } catch(e){
    res.json({message:`Something went wrong ${e}`});
  }
 }

export {login , register , getUserHistory , addToHistory };