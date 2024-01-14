import mongoose from 'mongoose';
// import {DB_NAME} from '../Config.js';

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}${"your_database_name"}`)
        console.log("mongodb connection success",connectionInstance.connection.host)
    }
    catch(error){
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}

export default connectDB