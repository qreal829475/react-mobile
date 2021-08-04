import { observable, action, makeObservable } from "mobx";

class LetterStore {
  constructor(stores) {
    // super(store);
    this.stores = stores;
    makeObservable(this);
  }

  @observable letter = "c";

  doStore = () => {
    console.log(this.stores.store.name);
  };

  
  @action
  setLetter(data) {
    this.letter = data;
  }
}

export default LetterStore;
