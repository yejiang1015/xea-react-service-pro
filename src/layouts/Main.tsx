import * as React from "react";

import { Redirect, Route, Switch } from "react-router";

import LazyLoad from "@/components/LazyLoad";
import { Tabs } from "antd";
import Warp from "@/components/Warp";
import __Pages_Main_List from "@/pages/Main/List";
import __Pages_Main_Setting from "@/pages/Main/Setting";

const { TabPane } = Tabs;

export default class extends Warp {
  render() {
    return (
      <section className="main-background-img flex-col ui-vh-100 align-center">
        <header className="">
          <Tabs
            tabPosition="top"
            activeKey={this.props.location.pathname}
            onChange={(activeKey) => {
              this.props.history.push(activeKey);
            }}
          >
            <TabPane tab="列表" key="/main/list"></TabPane>
            <TabPane tab="设置" key="/main/setting"></TabPane>
          </Tabs>
        </header>
        <Switch>
          <Route
            path="/main/"
            exact
            component={() => <Redirect to="/main/list" />}
          ></Route>
          <Route
            path="/main/list"
            exact
            component={LazyLoad(__Pages_Main_List)}
          ></Route>
          <Route
            path="/main/setting"
            exact
            component={LazyLoad(__Pages_Main_Setting)}
          ></Route>
        </Switch>
      </section>
    );
  }
}
