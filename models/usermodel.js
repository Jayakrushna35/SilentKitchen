const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'user name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
       type:String,
       required:[true,'password is required'],
       minLength: 6,
       maxLength: 25
    },
    address:{
        type:Array,
    },
    phone:{
        type:Number,
        required:[true,'phone number is required']
    },
    usertype:{
        type:String,
        required:[true,'user type is required'],
        default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://www.google.com/imgres?q=user%20image%20clear%20background&imgurl=https%3A%2F%2Ftoppng.com%2Fuploads%2Fpreview%2Fuser-account-management-logo-user-icon-11562867145a56rus2zwu.png&imgrefurl=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fuser-account-management-logo-user-icon-abstract-backgrounds-PNG-free-PNG-Images_165153&docid=9pEMBZrgDZls7M&tbnid=A9G2srROCl4KcM&vet=12ahUKEwiYntXwoOaNAxXEYvUHHVxKBPYQM3oECGsQAA..i&w=840&h=859&hcb=2&ved=2ahUKEwiYntXwoOaNAxXEYvUHHVxKBPYQM3oECGsQAA'
    }
},{timestamps:true});

module.exports = mongoose.model('User',userSchema);