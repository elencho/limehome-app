import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import ImageSlider from "../ImageSlider";

it("renders correctly", () => {
  const tree = renderer.create(<ImageSlider />).toJSON();
  expect(tree).toMatchSnapshot();
});
