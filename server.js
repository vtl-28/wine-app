const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const user_router = require('./routes/user_routes')
const wine_router = require('./routes/wine_routes')

const PORT = process.env.PORT || 3001;

const app = express();
dotenv.config();
connectDB()
app.use(cors({ 
  origin: ["https://wine-app-pi.vercel.app"], 
  credentials: true,
  methods: ["POST", "GET", "PUT", "DELETE"] }));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
); 

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});
app.use("/api/wine", wine_router);
app.use("/api/user", user_router);

app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
  );
  