/* eslint-disable @typescript-eslint/camelcase */
// import "moment/locale/zh-cn";

import * as React from "react";

import { Route, Router, Switch } from "react-router";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";

import { ConfigProvider } from "antd";
import LazyLoad from "@/components/LazyLoad";
import { Provider } from "mobx-react";
import { ProviderProps } from "@/store/Initialization";
import __Layouts_Login from "@/layouts/Login";
import __Layouts_Main from "@/layouts/Main";
import __Layouts_NotFound from "@/layouts/NotFound";
import __Pages_Index from "@/pages/Index";
import { createHashHistory } from "history";
import zh_CN from "antd/lib/locale-provider/zh_CN";

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, new RouterStore());

export default (
  <Provider {...ProviderProps()}>
    <ConfigProvider locale={zh_CN}>
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            exact
            component={LazyLoad(__Pages_Index, false)}
          ></Route>
          <Route path="/login" component={LazyLoad(__Layouts_Login)}></Route>
          <Route path="/main" component={LazyLoad(__Layouts_Main)}></Route>
          <Route path="*" component={LazyLoad(__Layouts_NotFound)}></Route>
        </Switch>
      </Router>
    </ConfigProvider>
  </Provider>
);
