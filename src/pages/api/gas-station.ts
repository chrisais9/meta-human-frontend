// pages/api/gas-station.ts

import { deployedAddress } from "@/config/caver";
import Caver from "caver-js";
import { NextApiRequest, NextApiResponse } from "next";
const caver = new Caver("https://api.baobab.klaytn.net:8651");

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { senderRawTransaction: senderRawTransaction } = request.body;

  const { to: to } = caver.klay.decodeTransaction(senderRawTransaction);
  if (!to || to.toLowerCase() !== deployedAddress.toLowerCase()) {
    console.log(to);
    return response.status(404);
  }

  caver.klay.accounts.wallet.add(
    process.env.GAS_STATION_ADDRESS_PRIVATE_KEY || "",
    process.env.GAS_STATION_ADDRESS
  );

  const { transactionHash: txHash } = await caver.klay.sendTransaction({
    senderRawTransaction: senderRawTransaction,
    feePayer: process.env.GAS_STATION_ADDRESS,
  });

  return response.status(200).json({
    txHash: txHash,
  });
}
