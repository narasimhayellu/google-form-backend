const dataModel = require("../model/dataModel")

const postData = async (req, res) => {
    try {
      const newProduct = await dataModel.create(req.body);
      res.status(201).send(newProduct);
    } catch (err) {
      res.status(500).json({ error: "Failed to add product", details: err.message });
    }
  };

module.exports = postData;  