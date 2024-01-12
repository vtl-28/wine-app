const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");


const app = express();
dotenv.config();
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
); 

const PORT = process.env.PORT || 3001;

app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
  );
  