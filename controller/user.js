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
       
       const response= await req.user.createEmployee({id,name,section,Designation,Address})


        await req.user.update({totalemployee:totalEmployee});
        
        await t.commit();
        
        res.status(201).json({message:response,success:true,totalEmployee:totalEmployee});
        
    } catch(err) {
         await t.rollback();
        console.log(err);
        res.status(500).json({message:"Something went wrong",success:false})
    }

}
exports.getEmployee=async(req,res,next)=>{

    try{


        const employees = req.user.employees;

        
       
       const employee = await req.user.getEmployee();
      
       
    }
    catch(err){

        res.status(500).json({message:err,success:false});
    }
}

exports.deleteEmployee=async(req,res,next)=>{
    const t= await sequelize.transaction();
    try{
        const id=req.params.id;
       if(isStringInvalid(id))
       {
        return  res.status(500).json({message:'something went wrong',success:false})
       }
       
        const user= await Employee.findOne({where:{id:id}})
        const response=await Expense.destroy({where:{id:id},transaction:t})
        

        await req.user.update({employee:Employee});

        
    
        if(response===0){
           return  res.status(401).json({message:"Employee does not Belongs to User",success:false});
        }
        await t.commit();
        res.status(200).json({message:response,success:true,employee:employee});
      
    }
    catch(err){
        console.log(err)
        await t.rollback();
        res.status(500).json({message:err,success:false});


    }
}



