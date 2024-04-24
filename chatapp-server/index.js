const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/chats",chatRoute);

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to my chatapp application');
})

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
