import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { AbiItem, toWei } from "web3-utils";

import NFTCollection from "@/abis/NFTCollection.json";
import { INFT } from "@/schema/INFT";
import axios from "axios";

declare let window: any;

interface IWeb3 {
  walletAddress: string;
  contract: Contract;
  collectionName: string;
  totalSupply: bigint;
  collection: INFT[];
  isMintSaleActive: boolean;
  maxMintAmount: bigint;
}

@Module({ dynamic: true, store, name: "NFTContract" })
class NFTContractManager extends VuexModule implements IWeb3 {
  walletAddress = "";
  contract = {} as any;
  collectionName = "";
  totalSupply = BigInt(0);
  collection = [] as INFT[];
  isMintSaleActive = false;
  maxMintAmount = BigInt(0);

  @Mutation
  setWalletAddress(address: string) {
    this.walletAddress = address;
  }

  @Mutation
  setContract(contract: Contract) {
    this.contract = contract;
  }

  @Mutation
  setCollectionName(nameOfNFT: string) {
    this.collectionName = nameOfNFT;
  }

  @Mutation
  setTotalSupply(totalSupply: bigint) {
    this.totalSupply = totalSupply;
  }

  @Mutation
  setCollection(collection: INFT[]) {
    this.collection = collection;
  }

  @Mutation
  setIsMintSaleActive(isMintSaleActive: boolean) {
    this.isMintSaleActive = isMintSaleActive;
  }

  @Mutation
  setMaxMintAmount(maxMintAmount: bigint) {
    this.maxMintAmount = maxMintAmount;
  }

  @Action({ rawError: true })
  async connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }

    const web3: Web3 = window.web3;

    const address = await web3.eth.getAccounts();
    this.setWalletAddress(address[0]);

    await this.establishContract();
  }

  @Action({ rawError: true })
  async establishContract() {
    const web3: Web3 = window.web3;

    const networkId = await web3.eth.net.getId();
    const networkData = (NFTCollection.networks as any)[networkId];

    if (networkData) {
      const abi = NFTCollection.abi;
      const address = networkData.address as string;

      const contract = new web3.eth.Contract(abi as AbiItem[], address);
      this.setContract(contract);

      await this.fetchCollectionName();
      await this.fetchCollectionTotalSupply();
      await this.fetchMintSaleStatus();
      await this.fetchMaxMintAmount();
      await this.fetchNFTInCollection();
    } else {
      window.alert("Contract is not deployed to detected network.");
    }
  }

  @Action({ rawError: true })
  async fetchCollectionName() {
    const name = await this.contract.methods.name().call();
    this.setCollectionName(name);
  }

  @Action({ rawError: true })
  async fetchCollectionTotalSupply() {
    const totalSupply = await this.contract.methods.totalSupply().call();
    this.setTotalSupply(totalSupply);
  }

  @Action({ rawError: true })
  async fetchMintSaleStatus() {
    const isMintSaleActive = await this.contract.methods.isMintSaleActive().call();
    this.setIsMintSaleActive(isMintSaleActive);
  }

  @Action({ rawError: true })
  async fetchMaxMintAmount() {
    const maxMintAmount = await this.contract.methods.maxMintAmount().call();
    this.setMaxMintAmount(maxMintAmount);
  }

  @Action({ rawError: true })
  async fetchNFTInCollection() {
    let collection: INFT[] = [];

    for (let i = 0; i < this.totalSupply; i++) {
      const hash = await this.contract.methods.tokenURIs(i).call();
      try {
        const response = await axios.get(`https://ipfs.io/ipfs/${hash}?clear`);
        if (response.status != 200) {
          throw new Error("Something went wrong");
        }

        const metadata = await response.data;

        collection = [
          {
            collection: "HoneyXBadger",
            name: metadata?.properties?.name?.description ?? metadata.name,
            description: metadata?.properties?.description?.description ?? metadata.description,
            image: metadata?.properties?.image?.description ?? metadata.image,
          },
          ...collection,
        ];
      } catch (e) {
        console.error("Something went wrong", e);
      }
    }
    this.setCollection(collection);
  }

  @Action({ rawError: true })
  async mint(data: { mintAmount: number }): Promise<void> {
    const web3: Web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const response = await NFTContractModule.contract.methods
      .mintHoneyBadger(data.mintAmount)
      .send({ from: account, value: toWei("0.1") });

    console.log(response.data);
  }
}

export const NFTContractModule = getModule(NFTContractManager, store);
