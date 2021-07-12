import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react", () => {
  const react = jest.requireActual("react");
  return {
    ...react,
    useContext: jest.fn(),
  };
});

const mockContext = {
  categories: {
    current: [
      {
        id: 1,
        link: "#home",
        name: "Home",
      },
      {
        id: 2,
        link: "#home",
        name: "Infantil",
      },
    ],
  },
};

describe("Breadcrumbs component", () => {

  it("should render breadcrumbs", () => {
    React.useContext.mockImplementation(() => {
      return mockContext;
    });

    const breadcrumbs = Enzyme.shallow(<Breadcrumbs />);
    expect(breadcrumbs.find("ol").hasClass("breadcrumbs__list")).toBeTruthy();
  });

  it("should match snapshot", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Breadcrumbs />);
    const breadcrumbs = renderer.getRenderOutput();
    expect(breadcrumbs).toMatchSnapshot();
  });
  
});
