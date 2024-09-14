module.exports={
    async error2(res,message="Internal Server Error"){
        return new Promise((resolve,reject)=>{
            res.status(402).json({success:false,data:{},message});
        })
    },
}
