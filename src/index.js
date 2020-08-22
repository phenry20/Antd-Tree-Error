import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import MyComponent from "./component";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <div className="App">
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
    <MyComponent />
  </div>,
  document.getElementById("root")
);
