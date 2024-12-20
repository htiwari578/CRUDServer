import express from "express" ;


import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";


dotenv.config();


const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const PORT  = process.env.PORT || 3000 ;

// routes


// error handling

// Testing POSTGRES connection
app.get("/", async(req, res)=> {
    console.log("Start");
    const result = await pool.query("SELECT current_database()");
    console.log("end");
    res.send(`The database name is: ${result.rows[0].current_database}`);
})


app.listen(PORT, ()=> {
 
    console.log(`server is runing at port  ${PORT}`);
})


