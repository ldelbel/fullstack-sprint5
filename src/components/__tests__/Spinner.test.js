import React from "react";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Spinner from "../Spinner";

jest.mock("react", () => {
  const react = jest.requireActual("react");
  return {
    ...react,
    useContext: jest.fn(),
  };
});

describe("Spinner component", () => {
  describe("when loading state is true", () => {
    it("should render", () => {
      React.useContext.mockImplementation(() => {
        return { isLoading: () => true };
      });
      const { container } = render(<Spinner />);
      expect(container.firstChild).toHaveClass("loading");
    });

    it("should match snapshot", () => {
      React.useContext.mockImplementation(() => {
        return { isLoading: () => true };
      });
      const spinner = renderer.create(<Spinner />).toJSON();
      expect(spinner).toMatchSnapshot();
    });
  });

  describe("when loading state is false", () => {
    it("should render an empty div", () => {
      React.useContext.mockImplementation(() => {
        return { isLoading: () => false };
      });
      const { container } = render(<Spinner />);
      expect(container.firstChild).toBeEmptyDOMElement();
    });
  });
});
