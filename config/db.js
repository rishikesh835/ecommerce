import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to MongoDB database ${conn.connection.host}`.yellow.bgGreen
    );
  } catch (error) {
    console.log(`Error in MongoDB: ${error}`.red.underline.bold);
  }
};

export default connectDB;
