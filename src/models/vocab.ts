import mongoose, { Schema } from "mongoose";

const vocabSchema = new Schema(
  {
    user_id: String,
    english: String,
    indonesian: String,
  },
  {
    timestamps: true,
  }
);

const Vocab = mongoose.models.Vocab || mongoose.model("Vocab", vocabSchema);

export default Vocab;
