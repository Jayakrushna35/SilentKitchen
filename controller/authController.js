const usermodel = require("../models/usermodel");
const bcrypt = require('bcryptjs');

const registerController = async (req,res) => {
  try {
    const {userName, email, password, phone, address } = req.body;
    // validation
    if(!userName || !email || !password || !phone || !address){
        return res.status(500).send({
            status:false,
            message:'Please Provide All Fields'
        })
    }

    //check user
    const exisiting = await usermodel.findOne({ email });
    if(exisiting){
        return res.status(500).send({
            sucess:false,
            message:`Email Already registerd please Login`

        })
    }
    //hashing
    const salt = bcrypt.genSaltSync(8);
    const hashedpassword = await bcrypt.hash(password,salt);

    //create new user

    const user = await usermodel.create({userName, email, password:hashedpassword, phone, address});
    res.status(201).send({
        sucess:true,
        message:'Sucessfully Register'
    })


  } catch (error) {
    console.log(error)
    res.status(500).send({
        succes:false,
        message:`Error in Register ApI`,
        error
    })
  }
};


const loginController = async(req,res) =>{
  try {
    const {email,password} = req.body;
    //validation
    if(!email || !password){
        return res.status(500).send({
          sucess:false,
          message:"please provide email and password",
        })
    }
    //check user
    const user = await usermodel.findOne({email});
    if(!user){
        return res.status(404).send({
          sucess:false,
          message:"User Not found",
        })
    }

    //check user password | compare password
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(500).send({
        success:false,
        message:'Invalid Crdentials'
      })
    }
    res.status(200).send({
        sucess:true,
        message:"Login successfully",
        user
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        sucess:false,
        message:"Erroe in login api",
        error
    })
  }
};
module.exports = {registerController,loginController};