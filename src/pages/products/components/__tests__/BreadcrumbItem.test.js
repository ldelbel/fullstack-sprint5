import React from "react";
import { render } from "@testing-library/react";
import { BreadcrumbItem } from "../Breadcrumbs/BreadcrumbItem/index";
import renderer from "react-test-renderer";
import { StyledBreadcrumbItem } from '../Breadcrumbs/BreadcrumbItem/styled';

describe("BreadcrumbItem component", () => {
  
  it("should render breadcrumbItem", () => {
    const mockStyledComponent = () => <StyledBreadcrumbItem />
    jest.mock('../Breadcrumbs/BreadcrumbItem/styled', () => mockStyledComponent() )
    const { getByText, getByRole } = render(
      <BreadcrumbItem link="linktest" name="nametest" />
    );
    expect(getByRole('link').hasAttribute('href')).toBeTruthy();
    expect(getByText("nametest")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const breadcrumb = renderer.create(<BreadcrumbItem link={"link-test"} name={"name-test"} />);
    expect(breadcrumb).toMatchSnapshot();
  });

});
