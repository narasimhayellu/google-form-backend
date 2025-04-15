const dataModel = require("../model/dataModel")

const postData = async (req, res) => {
    try {
      const newProduct = await dataModel.create(req.body);
      res.status(201).send(newProduct);
    } catch (err) {
      res.status(500).json({ error: "Failed to add product", details: err.message });
    }
  };

const deleteData = async (req,res) => {
  try {
    const user = await dataModel.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}  

module.exports = {postData,deleteData};  