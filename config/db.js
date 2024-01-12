const { Pool } = require('pg');

async function connectDB() {
    try {
        const conn = new Pool({
            connectionString: process.env.POSTGRES_URL + "?sslmode=require",
        })
  
      console.log("Connect to PostgreSQL successfully!");
    } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit();
    }
  }
  module.exports = connectDB;