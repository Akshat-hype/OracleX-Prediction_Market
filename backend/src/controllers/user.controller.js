import { User } from "../models/User.model.js";

export const loginUser = async (req, res, next) => {
  try {
    const { walletAddress } = req.body;

    let user = await User.findOne({ walletAddress });
    if (!user) user = await User.create({ walletAddress });

    res.json(user);
  } catch (err) {
    next(err);
  }
};
