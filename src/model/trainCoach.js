const mongoose = require('mongoose');


const trainCoachSchema = new mongoose.Schema({
    rows: { type: Number, required: true },
    seatsPerRow: { type: Number, required: true },
    lastRowSeats: { type: Number, required: true },
    totalSeats: { type: Number, required: true },
    availableSeats: { type: [Number], required: true },
});


const TrainCoach = mongoose.model('TrainCoach', trainCoachSchema);

module.exports=TrainCoach;