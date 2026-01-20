import { Market } from "../models/Market.model.js";

export const createMarket = async (req, res, next) => {
  try {
    const market = await Market.create(req.body);
    res.status(201).json(market);
  } catch (err) {
    next(err);
  }
};

export const getMarkets = async (_, res, next) => {
  try {
    const markets = await Market.find();
    res.json(markets);
  } catch (err) {
    next(err);
  }
};

export const getMarketById = async (req, res, next) => {
  try {
    const market = await Market.findById(req.params.id);
    res.json(market);
  } catch (err) {
    next(err);
  }
};
