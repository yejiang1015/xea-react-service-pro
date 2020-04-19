import { Button, Empty } from "antd";

import React from "react";
import { WarpProps } from "@/components/Warp";

interface BaseProps extends WarpProps {}
const RouteInstance: React.FC<BaseProps> = (props) => {
  return (
    <section className="ui-pt-40 flex-col just-center align-center">
      <Empty description="敬请期待！" />
      <Button
        className="ui-mt-40"
        type="dashed"
        onClick={() => props.history.push("/login")}
      >
        退出登录
      </Button>
    </section>
  );
};

export default RouteInstance;
