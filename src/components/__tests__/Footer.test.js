import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";
import { FooterBottom } from "../Footer/FooterBottom";
import { FooterContact } from "../Footer/FooterContact";
import { FooterLink } from "../Footer/FooterLink";
import { FooterPayment } from "../Footer/FooterPayment";

describe("Footer component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Cadastrar")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});

describe("Footer Bottom ", () => {
  it("should render correctly", () => {
    const { getByText } = render(<FooterBottom />);
    expect(getByText("Cadastrar")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const footer = render(<FooterBottom />);
    expect(footer).toMatchSnapshot();
  });
});

describe("Footer Contact ", () => {
  it("should render correctly", () => {
    const { getByText } = render(<FooterContact />);
    expect(getByText("Cadastrar")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const footer = render(<FooterContact />);
    expect(footer).toMatchSnapshot();
  });
});

describe("Footer Link ", () => {
  it("should render correctly", () => {
    const { getAllByText } = render(<FooterLink />);
    expect(getAllByText("Atendimento")).toHaveLength(2);
  });

  it("should match snapshot", () => {
    const footer = render(<FooterLink />);
    expect(footer).toMatchSnapshot();
  });
});

describe("Footer Payment ", () => {
  it("should render correctly", () => {
    const { getAllByText } = render(<FooterPayment />);
    expect(getAllByText("Atendimento")).toHaveLength(2);
  });

  it("should match snapshot", () => {
    const footer = render(<FooterPayment />);
    expect(footer).toMatchSnapshot();
  });
});
