import mongoose from "mongoose";

//CREATING QUOTES MODEL
const quoteShema = new mongoose.Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

mongoose.model("Quotes", quoteShema); //REGISTERING QUOTES SCHEMA MODEL
