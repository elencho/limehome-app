import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import MapCard from "../MapCard";

const data = [
  {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",},
  {url: "https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png",},
  {url: "https://miro.medium.com/max/800/1*meCFnZ5MK_7Fu1ogYfBvNQ.png"},
];

it("renders correctly", () => {
  const tree = renderer.create(<MapCard images={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
