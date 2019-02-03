import React from "react";
import Header from "./layouts/header";
import Panels from "./panels";
import Tabs from "./tabs";

export default function () {
  return (
    <div className="App">
      <Header/>
      <Panels/>
      <Tabs/>
    </div>
  );
};
