// pages/api/gas-station.ts

import Caver from "caver-js";
import { NextApiRequest, NextApiResponse } from "next";
const caver = new Caver("https://api.baobab.klaytn.net:8651");

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { senderRawTransaction: senderRawTransaction } = request.body;

  caver.klay.accounts.wallet.add(
    process.env.GAS_STATION_ADDRESS_PRIVATE_KEY || "",
    process.env.GAS_STATION_ADDRESS
  );

  const { transactionHash: txHash } = await caver.klay.sendTransaction({
    senderRawTransaction: senderRawTransaction,
    feePayer: process.env.GAS_STATION_ADDRESS,
  });
  console.log(txHash);

  return response.status(200).json({
    data: txHash,
  });
}
