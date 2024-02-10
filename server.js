const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const tickets = require("./routes/api/tickets");
const path = require('path');

//Connecting To DB
// connectDB();

//Intializing the app
const app = express();

//Enabling CORS here for safety of access of info from others domain
app.use(cors());
// Handle JSON parsing properly
app.use(express.json({
  extended: false
}
));
//Use the API gtroup instead of multiple paths for multiple routes
app.use("/api/tickets",tickets);

//Serve the static file along with the API on the same port
app.use(express.static(
  path.join(__dirname,"./client/build")
))
app.get("*",function (_,res){
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  )
})

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);

