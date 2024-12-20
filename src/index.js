import express from "express" ;


import cors from "cors";
import dotenv from "dotenv";


dotenv.config();


const app = express();

// middlewares
app.use(express.json());
app.use(cors);

const PORT  = process.env.PORT || 3000 ;

// routes


// error handling


app.listen(PORT, ()=> {
    console.log(`server is runing at port  ${PORT}`);
})


