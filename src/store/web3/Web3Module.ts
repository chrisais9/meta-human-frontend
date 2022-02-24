import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import Web3 from "web3";

@Module({ dynamic: true, store, name: "Web3" })
class Web3Manager extends VuexModule {
  get isWalletConnected(): boolean {
    try {
      const web3 = new Web3(Web3.givenProvider);
      console.log(web3.defaultAccount);
    } catch {
      //dd
    }
    return true;
  }
}

export const Web3Module = getModule(Web3Manager, store);
