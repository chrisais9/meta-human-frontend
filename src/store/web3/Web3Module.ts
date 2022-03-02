import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";

import NFTCollection from "@/abis/NFTCollection.json";

declare let window: any;

interface IWeb3 {
  walletAddress: string;
  contract: Contract;
  collectionName: string;
}

@Module({ dynamic: true, store, name: "Web3" })
class Web3Manager extends VuexModule implements IWeb3 {
  walletAddress = "";
  contract = {} as any;
  collectionName = "";

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

  @Action
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

  @Action
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
    } else {
      window.alert("Contract is not deployed to detected network.");
    }
  }

  @Action
  async fetchCollectionName() {
    const name = await this.contract.methods.name().call();
    this.setCollectionName(name);
  }
}

export const Web3Module = getModule(Web3Manager, store);
