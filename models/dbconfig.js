const mongoose = require(`mongoose`);

exports.dbconnection = async(req, res, next) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connection Ertablished Sucessffully.");

    } catch (error) {
        console.log(error.message);
    }
}