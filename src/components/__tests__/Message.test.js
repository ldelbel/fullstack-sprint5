import React from "react";
import { render } from "@testing-library/react";
import Message from "../Message";

jest.mock("react", () => {
  const react = jest.requireActual("react");
  return {
    ...react,
    useContext: jest.fn(),
  };
});

describe("Message component", () => {
  describe("when message state is not null", () => {
    it("should render component with messate state content", () => {
      React.useContext.mockImplementation(() => {
        return { message: "mensagem" };
      });
      const { getByText } = render(<Message />);
      expect(getByText("mensagem")).toBeInTheDocument();
    });

    it('should have a class of "alert"', () => {
      React.useContext.mockImplementation(() => {
        return { message: "mensagem" };
      });
      const { container } = render(<Message />);
      expect(container.firstChild).toHaveClass("alert");
    });

    it("should have a close button", () => {
      React.useContext.mockImplementation(() => {
        return { message: "mensagem" };
      });
      const { container } = render(<Message />);
      expect(container.firstChild.firstChild).toHaveClass("closebtn");
    });

    it("should match snapshot", () => {
      React.useContext.mockImplementation(() => {
        return { message: "mensagem" };
      });
      const message = render(<Message />);
      expect(message).toMatchSnapshot();
    });
  });

  describe("when message state is null", () => {
    it("should render an empty div", () => {
      React.useContext.mockImplementation(() => {
        return { message: null };
      });
      const { container } = render(<Message />);
      expect(container.firstChild).toBeEmptyDOMElement();
    });
  });
});
