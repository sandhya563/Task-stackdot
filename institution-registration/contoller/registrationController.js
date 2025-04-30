const {Registration} = require('../modeles');

exports.registerInstitution = async(req,res)=>{
    try{
        const registration = await Registration.create(req.body);
        res.status(200).json({success: true, data: registration});
    }catch(err){
         
        res.status(500).json({success: false, message: err.message})
    }
}