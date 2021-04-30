import { observable, action } from "mobx";

class LetterStore {
  constructor(stores) {
    // super(store);
    this.stores = stores;
  }
  @observable letter = "c";

  doStore = () => {
    console.log(this.stores.store.name);
  };
}

export default LetterStore;
