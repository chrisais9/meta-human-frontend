import Caver from "caver-js";

const BAOBAB_TESTNET_RPC_URL = "wss://api.baobab.klaytn.net:8652";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

export const deployedAddress = "0x70bf0D4514fB47432af5Db1eCE7b534E2e3CDF48";
export default caver;
