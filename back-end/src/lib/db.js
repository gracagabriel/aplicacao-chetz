import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB erro com conexão:", error);
  }
};
