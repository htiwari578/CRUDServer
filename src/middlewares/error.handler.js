// centralized error handling

const errorHandling = (error , req, res , next)=> {
    console.log(error.stack);
    res.status(500).json({
        message:"Something went wrong",
        error:error.message
    })
}

export default errorHandling;