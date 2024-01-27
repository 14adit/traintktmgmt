const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const tickets = require("./routes/api/tickets");

//Connecting To DB
// connectDB();

//Intializing the app
const app = express();

//Enabling CORS here for safety of access of info from others domain
app.use(cors());
// Handle JSON parsing properly
app.use(express.json());
//Use the API gtroup instead of multiple paths for multiple routes
app.use("/api/tickets",tickets);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);

