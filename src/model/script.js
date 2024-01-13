const TrainCoach=require('./trainCoach');


const preInsert =async () => {
    console.log('Connected to MongoDB');

    // Check if TrainCoach data exists, if not, initialize the database
    const count = await TrainCoach.countDocuments();
    if (count === 0) {
        const trainCoachData = {
            rows: 10,
            seatsPerRow: 7,
            lastRowSeats: 3,
            totalSeats: 73,
            availableSeats: Array.from({ length: 73 }, (_, index) => index + 1),
        };

        await TrainCoach.create(trainCoachData);
        console.log('Initialized TrainCoach data in the database.');
    }
}

module.exports=preInsert;