const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//test object
const app = express();

//dot env configuration
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{console.log(`server running on port ${8000}`.bgBlue)});