import React from 'react';
import { StyledBreadcrumbItem } from "./styled";

interface IBreadcrumbItem {
  link: string;
  name: string;
}

export function BreadcrumbItem({ link, name }: IBreadcrumbItem) {
  return (
    <StyledBreadcrumbItem>
      {link ? (
        <>
          <a className="breadcrumbs__link" href={link}>
            {name}
          </a>
          <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
        </>
      ) : (
        <span className="breadcrumbs__link">{name}</span>
      )}
    </StyledBreadcrumbItem>
  );
}