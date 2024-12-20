// centralized error handling

const errorHandling = (error , req, res , next)=> {
    console.log(err.stack);
    res.status(500).json({
        message:"Something went wrong",
        error:error.message
    })
}