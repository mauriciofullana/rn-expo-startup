import { action, computed, makeObservable, observable } from "mobx";

class Store {
  public list?: string[] = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      addItem: action,
      removeItem: action,
      count: computed,
    });
  }

  public addItem = (text: string) => {
    this.list?.push(text);
  };

  public removeItem = (index: number) => {
    this.list?.splice(index, 1);
  };

  public get getListItems() {
    return this.list;
  }

  public get count() {
    return this.list?.length;
  }
}

export default new Store();
