import { mongoose } from "mongoose";

const connectDb = async (url) => {
    mongoose.set("strictQuery", true);
    return mongoose.connect(url)  
        .then(() => console.log('mongodb is running'))
        .catch((error) => { 
            console.log(error)
            throw error  
        })
};

export default connectDb;