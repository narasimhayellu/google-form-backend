const mongoose = require("mongoose");
const {Schema} = mongoose;

const dataSchema = Schema({
    email:String,
    password:String,
})

const dataModel = mongoose.model("data", dataSchema);

module.exports = dataModel;