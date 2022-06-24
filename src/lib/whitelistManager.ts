import caver from "@/config/caver";
import MerkleTree from "merkletreejs";
import whitelist from "whitelist.json";

class WhitelistManager {
  private static instance: WhitelistManager;
  private merkletree: MerkleTree;

  private constructor() {
    const leafNodes = whitelist.address.map((addr) => caver.utils.sha3(addr));

    this.merkletree = new MerkleTree(leafNodes, caver.utils.sha3, {
      sortPairs: true,
    });
  }

  public static getInstance() {
    return this.instance || (this.instance = new this());
  }

  public getMerkleProof(address: string) {
    return this.merkletree.getHexProof(caver.utils.sha3(address)!);
  }

  public getMerkleRoot(): string {
    return this.merkletree.getHexRoot();
  }
}

export default WhitelistManager;
