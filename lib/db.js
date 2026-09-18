import mongoose from "mongoose";

if (!global._mongooseConnected) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB successfully connected"))
    .catch((error) => console.log(error, "error found with connecting MongoDB"));
  global._mongooseConnected = true;
}

export default mongoose;