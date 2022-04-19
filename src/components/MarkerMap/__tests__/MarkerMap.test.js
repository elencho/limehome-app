import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import MarkerMap from '../MarkerMap'

it("renders correctly", () => {
  const tree = renderer.create(<MarkerMap />).toJSON();
  expect(tree).toMatchSnapshot();
});
