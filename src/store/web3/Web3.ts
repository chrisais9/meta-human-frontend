import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

class Web3 extends VuexModule {
  get isWalletConnected(): boolean {
    return true;
  }
}

export const Web3Module = getModule(Web3, store);
