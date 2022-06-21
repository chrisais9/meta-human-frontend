// pages/api/gas-station.ts

import { deployedAddress } from "@/config/caver";
import Caver, { AbiItem } from "caver-js";
import { NextApiRequest, NextApiResponse } from "next";
import ABI from "@/abi/MetaHuman.json";
import WhitelistManager from "@/lib/whitelistManager";

const caver = new Caver("https://api.baobab.klaytn.net:8651");
const feePayerKeyring = caver.wallet.keyring.create(
  process.env.GAS_STATION_ADDRESS || "",
  process.env.GAS_STATION_ADDRESS_PRIVATE_KEY || ""
);
caver.wallet.add(feePayerKeyring);
const contract = caver.contract.create(ABI as AbiItem[], deployedAddress);
const whitelistManager = WhitelistManager.getInstance();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { type: type, senderRawTransaction: senderRawTransaction } =
      request.body;

    const transaction =
      caver.transaction.feeDelegatedSmartContractExecution.decode(
        senderRawTransaction
      );

    // check if transaction's destination is deployed contract
    if (transaction.to.toLowerCase() !== deployedAddress.toLowerCase()) {
      return response.status(403).json({
        message: "wrong destination",
      });
    }

    // check if sender is whitelisted
    if (type === "whitelist") {
      const merkleProofFromTransaction = contract.decodeFunctionCall(
        transaction.data
      ).merkleProof as any as string[];
      const merkleProofFromSender = whitelistManager.getMerkleProof(
        transaction.from
      );

      if (
        merkleProofFromTransaction.length === 0 ||
        merkleProofFromSender[0] !== merkleProofFromTransaction[0]
      ) {
        return response.status(403).json({
          message: "not whitelisted",
        });
      }
    } else if (type === "public") {
      const isPublicMintActive = await contract.methods
        .isPublicMintActive()
        .call();

      if (!isPublicMintActive) {
        return response.status(403).json({
          message: "not started",
        });
      }
    } else {
      return response.status(400).json({
        message: `"type" required`,
      });
    }

    await caver.wallet.signAsFeePayer(feePayerKeyring.address, transaction);

    return response.status(200).json({
      signedTransaction: transaction.getRLPEncoding(),
    });
  } catch (error) {
    return response.status(500).json({
      message: error,
    });
  }
}
