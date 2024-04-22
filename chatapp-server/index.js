const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const port = process.env.port || 5000;
const url = process.env.ATLAS_URL;

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`);
});

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connection established"))
.catch((error) => console.log("MongoDB connetion failed: ", error.message));
