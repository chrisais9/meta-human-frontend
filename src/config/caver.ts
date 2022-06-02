import Caver from "caver-js";

const BAOBAB_TESTNET_RPC_URL = "wss://api.baobab.klaytn.net:8652";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

export default caver;
