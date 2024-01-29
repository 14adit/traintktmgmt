const express = require("express");
//Handle all the route parameters with ease
const router = express.Router();

router.get('/test', (req,res) => {
    res.send("test api route is working fine");
})

// @route GET api/tickets
// @description Give all the tickets
// @access public
router.get("/",(req,res) => {
    // Ticket.find()
    // .then((tickets) => res.json(tickets))
    // .then(() => res.json({OK: "All Tickets route working fine"}))
    // .catch((err) => req.status(404).json({noticketsfound: 'MongoDB could not the details'}))
    res.json({OK: "All Tickets route working fine"})
});
module.exports = router;
