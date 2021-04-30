import { observable, action } from "mobx";
import { LetterStore } from "./index";

class Store {
//   constructor(stores) {
//     // this.letterStore = new LetterStore(this);
//     this.stores = stores;
//   }

  @observable
  name = "a";

  @action
  setName(name) {
    this.name = name;
  }
}

export default Store;
