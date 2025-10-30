import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mamidala_aakash:%40Akash310@aakashcluster.j3rijad.mongodb.net/blog-app"
  );
  console.log("DB connected.");
};
