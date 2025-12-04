import mongoose from 'mongoose';

/**
 * MongoDB connection with caching for serverless environments
 * Reuses existing connections to avoid exhausting connection pool
 */
let isConnected = false;

const connectDB = async () => {
  // Check if already connected
  if (isConnected && mongoose.connection.readyState === 1) {
    console.log('✅ Using existing MongoDB connection');
    return;
  }

  try {
    // Set mongoose options for better serverless performance
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    isConnected = false;
    // Don't exit in serverless - let the function fail gracefully
    throw error;
  }
};

export default connectDB;
