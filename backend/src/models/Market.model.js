import mongoose from "mongoose";

const marketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    endTime: Date,
    options: [String],
    status: {
      type: String,
      enum: ["OPEN", "CLOSED", "RESOLVED"],
      default: "OPEN",
    },
    resolvedOption: String,
    contractAddress: String,
  },
  { timestamps: true }
);

export const Market = mongoose.model("Market", marketSchema);
