export const apiErrorMiddleware =(req,res)=>{
    res.status(404).json({message:"API/path error"});
}