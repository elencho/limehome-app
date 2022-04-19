import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Tags from '../Tags'

it("renders correctly", () => {
  const tree = renderer.create(<Tags />).toJSON();
  expect(tree).toMatchSnapshot();
});
