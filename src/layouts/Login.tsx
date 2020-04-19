/* eslint-disable @typescript-eslint/camelcase */
// import "moment/locale/zh-cn";

import * as React from "react";

import { Route, Switch } from "react-router";

import LazyLoad from "@/components/LazyLoad";
import __Pages_Login from "@/pages/Login";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/login/"
            exact
            component={LazyLoad(__Pages_Login)}
          ></Route>
        </Switch>
      </div>
    );
  }
}
