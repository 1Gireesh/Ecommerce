import express, { Request } from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/connect";


const mongoUrl = process.env.MONGOURL || "";
const app = express();

// For CORS Policy
app.use(cors());
app.use(express.json());

// Just for checking the Home Route
app.all("/", (req, res) => res.send("working"));



// Connecting to Mongo Database
connectDb();

// Connecting App to the Localhost
app.listen(8080, () => {
    console.log("Connected to http://localhost:8080" );
});
