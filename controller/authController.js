const usermodel = require("../models/usermodel");

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
    const user = await usermodel.create({userName, email, password, phone, address});
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

module.exports = registerController;