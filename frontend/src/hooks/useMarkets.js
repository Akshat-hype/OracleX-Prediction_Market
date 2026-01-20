import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useMarkets = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMarkets = async () => {
    const res = await api.get("/markets");
    setMarkets(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMarkets();
  }, []);

  const getMarketById = (id) => markets.find((m) => m._id === id);

  const createMarket = async (data) => {
    await api.post("/markets", data);
    await fetchMarkets(); // refresh list
  };

  return {
    markets,
    loading,
    getMarketById,
    createMarket,
  };
};
