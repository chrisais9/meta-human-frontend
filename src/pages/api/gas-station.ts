// pages/api/gas-station.ts

import { deployedAddress } from "@/config/caver";
import Caver from "caver-js";
import { NextApiRequest, NextApiResponse } from "next";
const caver = new Caver("https://api.baobab.klaytn.net:8651");
const feePayerKeyring = caver.wallet.keyring.create(
  process.env.GAS_STATION_ADDRESS || "",
  process.env.GAS_STATION_ADDRESS_PRIVATE_KEY || ""
);
caver.wallet.add(feePayerKeyring);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { senderRawTransaction: senderRawTransaction } = request.body;

    const transaction =
      caver.transaction.feeDelegatedSmartContractExecution.decode(
        senderRawTransaction
      );

    if (transaction.to.toLowerCase() !== deployedAddress.toLowerCase()) {
      return response.status(404);
    }

    await caver.wallet.signAsFeePayer(feePayerKeyring.address, transaction);

    return response.status(200).json({
      transaction: transaction.getRLPEncoding(),
    });
  } catch (error) {
    return response.status(500).json({
      message: error,
    });
  }
}
