import express from "express" ;


import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from './routes/user.route.js'
import errorHandling from './middlewares/error.handler.js'
import createUserTable from "./data/userTable.js";



dotenv.config();


const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const PORT  = process.env.PORT || 3000 ;

// routes
app.use('/api/v1/', userRoutes);

// error handling middlware
app.use(errorHandling);

// create table before starting table
createUserTable();

// Testing POSTGRES connection
app.get("/", async (req, res) => {
    console.log("Start");
    const result = await pool.query("SELECT current_database()");
    console.log("result", result.rows);
    res.send(`The database name is : ${result.rows[0].current_database}`);
});
  

app.listen(PORT, ()=> {
 
    console.log(`server is runing at port  ${PORT}`);
})


