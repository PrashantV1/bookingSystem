const TrainCoach = require('../model/trainCoach');

// Reserve Seats endpoint
const reserveSeats = async (req, res) => {
    try {
        const { numSeats } = req.body;
        const trainCoach = await TrainCoach.findOne();

        if (!numSeats || numSeats <= 0 || numSeats > 7) {
            return res.status(400).json({ error: 'Invalid number of seats. Maximum is 7.' });
        }

        if (numSeats > trainCoach.availableSeats.length) {
            return res.status(400).json({ error: 'Not enough seats available.' });
        }

        const reservedSeats = trainCoach.availableSeats.slice(0, numSeats);
        trainCoach.availableSeats = trainCoach.availableSeats.slice(numSeats);

        // Update the document in MongoDB
        await trainCoach.save();

        return res.json({ reservedSeats });
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Display Available Seats endpoint
const displaySeats = async (req, res) => {
    try {
        const trainCoach = await TrainCoach.findOne();
        return res.json({ availableSeats: trainCoach.availableSeats });
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    reserveSeats,
    displaySeats,
};
