import mongoose , {Schema} from "mongoose";

const meetingSchema  = new Schema (
    {
        user_id : {type:String },
        meetingCode:{type:String , required :true},
        date:{type: Date , default:Date.now , required : true}
    }
)


const Meeting = mongoose.model("Meeting" , meetingSchema);

// this type of export is used when we have to  export multiple thing from the file 
export  {Meeting};