import { observable, action, makeObservable } from "mobx";

class Store {
  constructor(stores) {
    this.stores = stores;
    makeObservable(this);
  }

  @observable name = "a";

  @action
  setName(name) {
    this.name = name;
  }
}

export default Store;
