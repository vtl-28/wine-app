const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const book_router = require('./routes/book_route')

const PORT = process.env.PORT;

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

app.use("/api/v1/books", book_router)

app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
  );
  