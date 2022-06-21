import Caver from "caver-js";

const BAOBAB_TESTNET_RPC_URL =
  "wss://public-node-api.klaytnapi.com/v1/baobab/ws";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

export const deployedAddress = "0x6A8ef6cd46860E170E15c8056A58Fb5CB4600724";
export default caver;
