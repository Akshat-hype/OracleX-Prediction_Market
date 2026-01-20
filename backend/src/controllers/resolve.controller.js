import { Market } from "../models/Market.model.js";

export const resolveMarket = async (req, res, next) => {
  try {
    const { option } = req.body;

    const market = await Market.findByIdAndUpdate(
      req.params.id,
      { status: "RESOLVED", resolvedOption: option },
      { new: true }
    );

    res.json(market);
  } catch (err) {
    next(err);
  }
};
