import React from 'react';
import { render } from "@testing-library/react";
import Company from "../company/Company";

const company = <Company url="/company" />;

it("company rendered successfully", () => {
  const { queryByTestId } = render(company);
  expect(queryByTestId("company")).toBeTruthy();
})
