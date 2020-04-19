import { inject, observer } from "mobx-react";

import { GlobalStore } from "@/store";
import ImgHead from "@/assets/img/HeadPortrait/head.png";
import { InputNumber } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import Warp from "@/components/Warp";

interface BaseProps {
  GlobalStore: GlobalStore;
}
interface BaseState {}

@inject("GlobalStore")
@observer
export default class extends Warp<BaseProps, BaseState> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { GlobalStore } = this.props;
    return (
      <section className="main-background-img ui-vh-100 flex just-center align-center">
        <Link to="/login">进入控制台</Link>
        <img
          className="ui-ml-16 color-666"
          style={{ opacity: GlobalStore.subnum / 10 }}
          width="32"
          src={ImgHead}
          alt=""
        />
        <div className="ui-pl-24">
          <InputNumber
            min={0}
            max={10}
            value={GlobalStore.subnum}
            onChange={(val) => {
              GlobalStore.updateGlobalStoreToSubnum(val || 0);
            }}
          />
        </div>
      </section>
    );
  }
}
