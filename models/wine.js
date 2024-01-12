const mongoose = require("mongoose");

const wine_schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 50,
          },
          year: {
            type: Number,
            required: true,
          },
          type: {
            type: String,
            required: true,
          },
          varietal: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            min: 0,
            max: 10,
          },
          consumed: {
            type: Boolean,
            default: false,
          },
          date_consumed: {
            type: Date,
            required: function () {
              return this.consumed === true;
            }
        },
        stored_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
          }
    },
    {
        timestamps: true,
    }

  );
  
  module.exports = mongoose.model("Wine", wine_schema);