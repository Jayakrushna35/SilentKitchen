const mongoose = require("mongoose");
const color = require("colors");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Database ${mongoose.connection.host}`.bgCyan);
    } catch (err) {
        console.log("DB error", err, color.bgYellow);
    }
};



module.exports = connectDb;