import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router";

import Spin from "@/components/Spin";

export const SwitchViewRoot = () => (
  <Suspense fallback={<Spin />}>
    <Switch>
      <Route
        path="/"
        exact
        component={lazy(() => import("@/pages/Index"))}
      ></Route>
      <Route
        path="/login"
        component={lazy(() => import("@/pages/Login"))}
      ></Route>
      <Route
        path="/main"
        component={lazy(() => import("@/pages/Main"))}
      ></Route>
      <Route
        path="*"
        component={lazy(() => import("@/pages/NotFound"))}
      ></Route>
    </Switch>
  </Suspense>
);

export const SwitchViewMain = () => (
  <Suspense fallback={<Spin />}>
    <Switch>
      <Route
        path="/main/"
        exact
        component={() => <Redirect to="/main/list" />}
      ></Route>
      <Route
        path="/main/list"
        component={lazy(() => import("@/pages/Main/List"))}
      ></Route>
      <Route
        path="/main/setting"
        component={lazy(() => import("@/pages/Main/Setting"))}
      ></Route>
    </Switch>
  </Suspense>
);
