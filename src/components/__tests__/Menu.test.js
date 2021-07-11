import React from "react";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Menu from "../Menu";

jest.mock("react", () => {
  const react = jest.requireActual("react");
  return {
    ...react,
    useContext: () => ({
      categories: {
        all: [
          {
            id: 1,
            label: "Novidades",
            link: "#home",
          },
          {
            id: 2,
            label: "Feminino",
            link: "#home",
          },
        ],
      },
    }),
  };
});

describe("Menu component", () => {
  it("should render categories", () => {
    const { getByText } = render(<Menu />);
    expect(getByText("Novidades")).toBeInTheDocument();
    expect(getByText("Feminino")).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const menu = renderer.create(<Menu />).toJSON();
    expect(menu).toMatchSnapshot();
  })
});
