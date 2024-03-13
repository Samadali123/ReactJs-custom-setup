require("dotenv").config({ path: "./.env" });
const express = require(`express`);
const app = express();
const PORT = 8080;

app.get(`/`, (req, res) => {
    res.send("Welcome to the home page")
})


app.listen(process.env.PORT, () => {
    console.log(`server started running on port ${process.env.PORT}`);
})