require("dotenv").config({ path: "./.env" });
const express = require(`express`);
const app = express();
require("./models/dbconfig").dbconnection();

const usersRouter = require(`./routes/userRoute`);

// logger for a route hit information in the backend

const logger = require(`morgan`);
app.use(logger('tiny'));

// body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// make base uri of api
app.use(`/`, usersRouter);

// unknown routes
app.all("*", function(req, res, next) {
    res.status(404).json({
        success: false,
        message: `${req.url} Not found `
    });
})

app.listen(process.env.PORT, () => {
    console.log(`server started running on port ${process.env.PORT}`);
})