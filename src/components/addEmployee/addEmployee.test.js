import { shallow} from "enzyme";
import AddEmployee from '../addEmployee/addEmployee';
import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe("Headers Tag test", () => {
    const component = shallow(<AddEmployee />);
    
    it("should contain proper header when addEmployee page rendered", () => {
        expect(component.find("h2").text()).toContain("Add Employee");
    });

    it("should contain wrong header when addEmployee is not rendered", () => {
        expect(component.find("h2").text()).not.toContain("AddEmployee");
    });
});

describe("Add Employee Form test", () => {
    it("check if form components displays properly", () => {
      const { getByTestId } = render(<AddEmployee />);
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
      const { getByTestId } = render(<AddEmployee />);
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