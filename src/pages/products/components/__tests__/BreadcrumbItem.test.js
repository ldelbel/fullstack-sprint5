import React from "react";
import { render } from "@testing-library/react";
import { BreadcrumbItem } from "../Breadcrumbs/BreadcrumbItem/index";

describe("BreadcrumbItem component", () => {
  it("should render breadcrumbItem", () => {
    const { getByText, getByRole } = render(
      <BreadcrumbItem link="linktest" name="nametest" />
    );
    expect(getByRole("link").hasAttribute("href")).toBeTruthy();
    expect(getByText("nametest")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const breadcrumb = render(
      <BreadcrumbItem link={"link-test"} name={"name-test"} />
    );
    expect(breadcrumb).toMatchSnapshot();
  });
});
