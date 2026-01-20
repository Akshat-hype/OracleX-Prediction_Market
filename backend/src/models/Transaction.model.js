import mongoose from "mongoose";

const txSchema = new mongoose.Schema(
  {
    wallet: String,
    marketId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    option: String,
    txHash: String,
  },
  { timestamps: true }
);

export const Transaction = mongoose.model("Transaction", txSchema);
