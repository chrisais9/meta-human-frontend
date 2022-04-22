import caver from "@/config/caver";
import { AbiItem } from "caver-js";
import ABI from "@/abi/abi.json";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
