const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    train_name: {
        type: String,
        required: true
    },
    train_number: {
        type: Integer,
        required: true
    },
    Passenger_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    start: {
        type:String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    price: {
        type:Float,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: Time,
        default: Time.now
    }
})
module.exports = Ticket = mongoose.model('ticket',TicketSchema );