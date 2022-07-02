const errorHandler = (error,req,res,next)=>{
    console.log("req.statusCode",res.statusCode)
    
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode).json({message:error.message,stack:error.stack})
}

module.exports = errorHandler