const Wine = require("../models/wine")

const add_wine = async (req, res) => {
    const { name, year, type, varietal, rating, consumed, date_consumed } =
      req.body;
      console.log(req.body)
  
    if (!name || !year || !type || !varietal) {
      res.status(400).send("Please enter all the fields");
      return;
    }
  
    const new_wine = {
    stored_by: req.user._id,
      name,
      year,
      type,
      varietal,
      rating,
      consumed,
      date_consumed,
    };
    console.log(new_wine)
    try {
      const wine = await (
        await Wine.create(new_wine)
      ).populate("stored_by", "_id email");
      res.status(201).send(wine);
    } catch (error) {
      res.status(404).send(error);
    }
  };

  const update_wine = async (req, res) => {
    const wine_id = req.params.id;

    const { name, year, type, varietal, rating } =
      req.body;
  
    if (!name && !year && !type && !varietal) {
      res.status(404).send("Please fill in the form to update talk details");
      return;
    }
  
    const wine_params = {
        name,
        year,
        type,
        varietal,
        rating
      };
  
    Object.keys(wine_params).forEach((detail) => {
      if (wine_params[detail] === "") {
        delete wine_params[detail];
      }
    });
  
    try {
      const updated_wine_record = await Wine.findByIdAndUpdate(wine_id, {
        $set: wine_params,
      });
      res.status(201).send(updated_wine_record);
    } catch (error) {
      res.status(404).send(error);
    }
  };

  const get_wines = (req, res) => {
    Wine.find({})
      .sort({ createdAt: -1 })
      .populate("stored_by", "_id email")
      .then((wines) => {
        res.status(201).send(wines);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  };

  const delete_wine = async (req, res) => {
    const wine_id = req.params.id;
  
    try {
      const wine = await Wine.findByIdAndDelete({ _id: wine_id });
      res.status(201).send(wine);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  module.exports = { add_wine, update_wine, get_wines, delete_wine }