require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url)

const Ride = mongoose.model('Ride', {
    destination: JSON,
    arrivalTime: String,
    rideTime: Number,
    waypoints: Array,
    routes: Object,
    dynamic: String
})
    
module.exports = Ride