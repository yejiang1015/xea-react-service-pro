/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Store from "./index";

import { RouterStore } from "mobx-react-router";
import { configure } from "mobx";

interface StringMap<T> {
  [x: string]: T;
}

/** 严格模式 不允许在动作之外进行状态修改 */
configure({ enforceActions: "observed" });

export const ProviderProps = (): StringMap<any> => {
  const StoreList: StringMap<any> = Store;
  const routerStore = new RouterStore();
  const rootStore: StringMap<any> = {
    routerStore,
  };
  /** 扩展属性 */
  for (const s in StoreList) {
    rootStore[s] = new StoreList[s]();
  }
  return rootStore;
};
