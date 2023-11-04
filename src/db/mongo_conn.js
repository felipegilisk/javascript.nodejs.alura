import mongoose, { mongo } from 'mongoose';

async function mongoConnection() {
    // const environment = process.env.ENVIRONMENT;
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASS;
    const CONNECTION_STRING = "mongodb+srv://" + dbUser + ":" + dbPass + "@cluster0.8isozzq.mongodb.net/bookstorm?retryWrites=true&w=majority";
    
    mongoose.connect(CONNECTION_STRING);
    return mongoose.connection;
}

export default mongoConnection;
