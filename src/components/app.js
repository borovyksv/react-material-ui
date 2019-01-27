import React from "react";
import Header from "./header";
import Tabs from "./tabs";
import Panels from "./panels";

export default props => {
  return (
    <div className="App">
      <Header/>
      <Panels/>
      <Tabs/>
    </div>
  );
};
