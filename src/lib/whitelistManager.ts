import caver from "@/config/caver";
import MerkleTree from "merkletreejs";
import whitelist from "whitelist.json";

class WhitelistManager {
  private static instance: WhitelistManager;
  merkletree;

  private constructor() {
    const leafNodes = whitelist.address.map((addr) => caver.utils.sha3(addr));

    this.merkletree = new MerkleTree(leafNodes, caver.utils.sha3, {
      sortPairs: true,
    });
  }

  public static getInstance() {
    return this.instance || (this.instance = new this());
  }

  getMerkleProof(address: string) {
    return this.merkletree.getHexProof(caver.utils.sha3(address)!);
  }

  getMerkleRoot(): string {
    return this.merkletree.getHexRoot();
  }
}

export default WhitelistManager;
