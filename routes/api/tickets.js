const express = require("express");
const ticket = require("../../models/ticket");
//Handle all the route parameters with ease
const router = express.Router();

router.get('/test', (req,res) => {
    res.send("test api route is working fine");
})

// @route GET api/tickets
// @description Give all the tickets
// @access public
// Read operation
router.get("/",(req,res) => {
    Ticket.find()
    .then((tickets) => res.json(tickets))
    .then(() => res.json({OK: "All Tickets route working fine"}))
    .catch((err) => req.status(404).json({noticketsfound: 'MongoDB could not the details'}))
    // res.json({OK: "All Tickets route working fine"})
});

// @route GET api/tickets/:id
// @description Get single book details by searching for the ID
// @access public
// READ and SEARCH operation
router.get("/:id", (req,res) => {
    ticket.findById(req.params.id)
    .then((ticket) => res.json(ticket))
    .catch((err) => res.status(404).json( {noticketfound: "Could not find the book"} ))
    // res.json({
    //     OK:"Get Ticket By Id route is working fine"
    // })
})

// @route GET api/tickets/
// @description Save a new Ticket
// @access public
// CREATE operation

router.post("/", (req,res) => {
    ticket.create(req.body)
    .then((ticket) => res.json( {msg:"A new ticket was created successfully"} ))
    .catch((err) => res.status(404).json({ noticketfound: "Could not create the book"}))
    // res.json({
    //     OK:"Create a ticket successfully"
    // })
})

// @route GET api/tickets/:id
// @description Find a new ticket by its ID and update it
// @access public
// Find and UPDATE and SEARCH operation

router.put("/", (req,res) => {
    ticket.findByIdAndUpdate(req.params.id, req.body)
    .then((ticket) => res.json( {msg:"This ticket was updated successfully"} ))
    .catch((err) => res.status(400).json({ noticketfound: "Could not update this ticket"}))
    // res.json({
    //     OK:"Update a ticket successfully"
    // })
})

// @route GET api/tickets/:id
// @description Find a new ticket by its ID and delete it
// @access public
// FIND and DELETE and SEARCH operation

router.delete("/", (req,res) => {
    ticket.findByIdAndRemove(req.params.id, req.body)
    .then((ticket) => res.json( {msg:"This ticket was deleted successfully"} ))
    .catch((err) => res.status(404).json({ noticketfound: "Could not delete this ticket"}))
    // res.json({
    //     OK:"Delete a ticket successfully"
    // })
})


module.exports = router;

