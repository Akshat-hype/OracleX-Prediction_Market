import { connectWallet } from "../services/wallet";

export const useWallet = () => {
  const connect = async () => {
    return await connectWallet();
  };

  return { connect };
};
