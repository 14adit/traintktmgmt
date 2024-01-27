const mongoose = require("mongoose");
const connectDB = async() => {
    try{
        mongoose.set("strictQuery", true);
       await mongoose.connect(process.env.DB_URI,
        {
             useNewUrlParser: true,
         })
         .then( () => { 
            console.log("Successfully connected to mongoDB");
        })
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;