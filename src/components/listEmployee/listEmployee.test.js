//import { shallow} from "enzyme";
import ListEmployees from '../listEmployee/listEmployee';
import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe("Test For Employee Details Table", () => {
    
    it("should contain proper components when listEmployee page rendered", () => {
        const { getByTestId } = render(<ListEmployees />);
        const tableContainer = getByTestId("tableContainer");
        const table = getByTestId("table");
        const tableRowHeader = getByTestId("tableRowHeader");
        const tableBody = getByTestId("tableBody");
  
        expect(tableContainer).toBeInTheDocument();
        expect(table).toBeInTheDocument();
        expect(tableRowHeader).toBeInTheDocument();
        expect(tableBody).toBeInTheDocument();
    });

    it("check if Row elements displays properly", () => {
        const { getByTestId } = render(<ListEmployees />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const email = getByTestId("email");
        const gender = getByTestId("gender");
        const salary = getByTestId("salary");
        const department = getByTestId("department");
  
        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
        expect(salary).toBeInTheDocument();
        expect(department).toBeInTheDocument();
    });
  
    it("check if text content has correct value", () => {
        const { getByTestId } = render(<ListEmployees />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const email = getByTestId("email");
        const gender = getByTestId("gender");
        const salary = getByTestId("salary");
        const department = getByTestId("department");
  
        expect(firstName).toHaveTextContent("First Name");
        expect(lastName).toHaveTextContent("Last Name");
        expect(email).toHaveTextContent("Email");
        expect(gender).toHaveTextContent("Gender");
        expect(salary).toHaveTextContent("Salary");
        expect(department).toHaveTextContent("Department");
    });
});