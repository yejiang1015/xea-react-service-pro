import Loadable from "react-loadable";
import React from "react";

export default (WarpComp, lazy = true) => {
  /**
   * @Message 懒加载开发环境会影响报错输出信息
   */
  if (process.env.NODE_EVN === "production" && lazy) {
    return Loadable({
      loader: async (props) => <WarpComp {...props} />,
      loading: () => null,
    });
  }
  return (props) => <WarpComp {...props} />;
};
