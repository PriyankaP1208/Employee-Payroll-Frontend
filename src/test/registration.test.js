import { shallow} from "enzyme";
import Register from '../pages/register/Register';
import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe("Login Headers Tag test", () => {
    const component = shallow(<Register />);
    
    it("should contain proper header when login page rendered", () => {
        expect(component.find("h2").text()).toContain("Sign Up");
    });

    it("should contain wrong header when login page is not rendered", () => {
        expect(component.find("h2").text()).not.toContain("Signp");
    });
});

describe("Register Form test", () => {
    it("check if form components displays properly", () => {
      const { getByTestId } = render(<Register />);
      const logo = getByTestId("avatar");
      const form = getByTestId("form");
      const firstName = getByTestId("firstName");
      const lastName = getByTestId("lastName");
      const email = getByTestId("email");
      const password = getByTestId("password");
      const button = getByTestId("button");
  
      expect(logo).toBeInTheDocument();
      expect(form).toBeInTheDocument();
      expect(firstName).toBeInTheDocument();
      expect(lastName).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  
    it("check if form components has correct value", () => {
      const { getByTestId } = render(<Register />);
      const firstName = getByTestId("firstName");
      const lastName = getByTestId("lastName");
      const email = getByTestId("email");
      const password = getByTestId("password");
      const button = getByTestId("button");
  
      expect(firstName).toHaveTextContent("First Name");
      expect(lastName).toHaveTextContent("Last Name");
      expect(email).toHaveTextContent("Email");
      expect(password).toHaveTextContent("Password");
      expect(button).toHaveTextContent("Sign Up");
    });
  });