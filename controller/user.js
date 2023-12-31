const users=require('../models/users');
const sequelize = require('../util/database');



function isStringInvalid(string){
    if(string.length===0 || string==undefined){
        return true;
    }else{
        return false;
    }
}

exports.addEmployee=async(req,res,next)=>{
    try{
        const {id,name,section,Designation,Address}=req.body;
        if(isStringInvalid(id)||isStringInvalid(name)||
        isStringInvalid(section)||isStringInvalid(Designation)||isStringInvalid(Address))
        {
            return res.status(500).json({message:'Bad Parmeters:Something is Missing',success:false})
        }
       
      console.log(req.user.employee);
       
       const response= await req.user.createEmployee({id,name,section,Designation,Address,userId: req.user.id})
        
        res.status(201).json({message:response,success:true});
        
    } catch(err) {
        console.log(err);
        res.status(500).json({message:"Something went wrong",success:false})
    }

}
exports.getEmployee=async(req,res,next)=>{

    try{
Employee.findAll({ where : { userId: req.user.id}}).then(employee => {
        return res.status(200).json({employees, success: true})
    })
    catch(err){

        res.status(500).json({message:err,success:false});
    }
}

exports.deleteEmployee=async(req,res,next)=>{
    try{
        const employeeid=req.params.employeeid;
       if(isStringInvalid(id))
       {
        return  res.status(500).json({message:'something went wrong',success:false})
       }
    
        const response=await Employee.destroy({where:{id: employeeid, userId: req.user.id}})
        
        if(response===0){
           return  res.status(401).json({message:"Employee does not Belongs to User",success:false});
        }
        res.status(200).json({message:response,success:true,employee:employee});
      
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err,success:false});


    }
}



