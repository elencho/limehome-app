import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import PriceButton from "../PriceButton";

it("renders correctly", () => {
  const tree = renderer.create(<PriceButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
