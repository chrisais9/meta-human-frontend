import Caver from "caver-js";

const rpcURL = "wss://public-node-api.klaytnapi.com/v1/baobab/ws";

const caver = new Caver(rpcURL);

export const deployedAddress = "0x6A8ef6cd46860E170E15c8056A58Fb5CB4600724";
export default caver;
