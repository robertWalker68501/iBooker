import mongoose from 'mongoose';

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }
  try {
    cachedConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connected : ${cachedConnection.connection.host}`);
    return cachedConnection;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
