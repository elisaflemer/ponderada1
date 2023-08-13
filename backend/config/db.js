const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://admin:password@mongo:27017');
        console.log('Successful connection at: ' + connection.connection.host)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = connectDB;