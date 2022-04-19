import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import PaginationDot from '../PaginationDot'

it("renders correctly", () => {
  const tree = renderer.create(<PaginationDot />).toJSON();
  expect(tree).toMatchSnapshot();
});
