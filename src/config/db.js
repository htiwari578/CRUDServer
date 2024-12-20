import pkg from "pg"
import dotenv from "dotenv";

const {Pool} = pkg;
dotenv.config();



const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_DBPORT,
});

pool.on("connect",() => {
    console.log("Connection pool with database");
});

export default pool;