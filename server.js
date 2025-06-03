const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const router = require("./routes/testRoutes");

//test object
const app = express();

//dot env configuration
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/test',require("./routes/testRoutes"))
//route
// app.get('/',router);

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{console.log(`server running on port ${8000}`.bgBlue)});