const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const mongoDBConnection = require("./config/dbConfig");

const url = process.env.DB_CONNECTION_URL;
mongoDBConnection(url);
console.log("DB_CONNECTION_URL:", url); 


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dataRoutes = require("./routes/data");

app.use("/data",dataRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT} `));
