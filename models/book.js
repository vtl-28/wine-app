const mongoose = require("mongoose");

const book_schema = mongoose.Schema(
    {
      name: {
        type: "String",
        required: true,
        trim: true,
      },
      price: "Number"
    },
    {
        timestamps: true,
    }

  );
  
  module.exports = mongoose.model("Book", book_schema);