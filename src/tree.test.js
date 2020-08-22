import React from "react";
import { render } from "@testing-library/react";
const { default: MyComponent } = require("../component");

test("Should render tree", () => {
  render(<MyComponent />);
});
