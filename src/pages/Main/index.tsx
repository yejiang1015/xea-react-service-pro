import * as React from "react";

import { SwitchViewMain } from "@/routes/SwitchView";
import { Tabs } from "antd";
import Warp from "@/components/Warp";

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
        <SwitchViewMain />
      </section>
    );
  }
}
