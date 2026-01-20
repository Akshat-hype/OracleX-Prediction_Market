import { ethers } from "ethers";
import { env } from "./env.js";

export const provider = new ethers.JsonRpcProvider(env.RPC_URL);
