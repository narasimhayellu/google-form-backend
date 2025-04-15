const mongoose = require("mongoose");
const {Schema} = mongoose;

const dataSchema = Schema({
    name:String,
    email:String,
    password:String,
    experience:String,
})

const dataModel = mongoose.model("data", dataSchema);

module.exports = dataModel;