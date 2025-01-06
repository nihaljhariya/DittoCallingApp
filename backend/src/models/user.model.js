import mongoose , {Schema} from "mongoose";
const userSchema = new Schema (
    {
        name : {type : String , required :true},
        username : {type : String , required :true , unique : true},
        password : {type : String , required :true},
        token : {type : String },
    }
)

const User = mongoose.model("User" , userSchema);
// this type of export is used when we have to  export multiple thing from the file 

export {User};