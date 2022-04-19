import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import  HotelModal from '../HotelModal'

it("renders correctly", () => {
  const tree = renderer.create(<HotelModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
