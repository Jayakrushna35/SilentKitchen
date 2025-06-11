const testUserController = (req,res) => {
    try{
       res.status(200).send({
            success:true,
            message:'test User Data Api',
       });
    } catch(error){
        console.log(`error In tes Api`, error);
    }
};

module.exports = testUserController;