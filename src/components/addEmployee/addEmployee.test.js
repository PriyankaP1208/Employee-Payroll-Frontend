import AddEmployee from '../addEmployee/addEmployee';
import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

let getByTestId;
beforeEach(() => {
  ({ getByTestId } = render(<AddEmployee />));
});

describe("Headers Tag test", () => {
  it("should contain proper header when addEmployee page rendered", () => {
    expect(getByTestId("add")).toHaveTextContent("Add Employee");
  });

  it("should contain wrong header when addEmployee is not rendered", () => {
    expect(getByTestId("add")).not.toHaveTextContent("AddEmployee");
  });
});

describe("Add Employee Form test", () => {
    it("check if form components displays properly", () => {
      const form = getByTestId("form");
      const firstName = getByTestId("firstName");
      const lastName = getByTestId("lastName");
      const email = getByTestId("email");
      const gender = getByTestId("gender");
      const salary = getByTestId("salary");
      const department = getByTestId("department");
      const button = getByTestId("button");
  
      expect(form).toBeInTheDocument();
      expect(firstName).toBeInTheDocument();
      expect(lastName).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(gender).toBeInTheDocument();
      expect(salary).toBeInTheDocument();
      expect(department).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  
    it("check if form components has correct value", () => {
      const firstName = getByTestId("firstName");
      const lastName = getByTestId("lastName");
      const email = getByTestId("email");
      const gender = getByTestId("gender");
      const salary = getByTestId("salary");
      const department = getByTestId("department");
      const button = getByTestId("button");
  
      expect(firstName).toHaveTextContent("First Name");
      expect(lastName).toHaveTextContent("Last Name");
      expect(email).toHaveTextContent("Email");
      expect(gender).toHaveTextContent("Gender");
      expect(salary).toHaveTextContent("Salary");
      expect(department).toHaveTextContent("Department");
      expect(button).toHaveTextContent("SUBMIT");
    });
});