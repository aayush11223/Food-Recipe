const mongoose = require("mongoose")

const connectDb = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => console.log("connected..."))
        .catch((err) => console.log("connection error:", err))
}

module.exports = connectDb