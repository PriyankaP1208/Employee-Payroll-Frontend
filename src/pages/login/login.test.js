import { shallow} from "enzyme";
import Login from './Login'
import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("Login Headers Tag test", () => {
    const component = shallow(<Login />);
    
    it("should contain proper header when login page rendered", () => {
        expect(component.find("h2").text()).toContain("Sign In");
    });

    it("should contain wrong header when login page is not rendered", () => {
        expect(component.find("h2").text()).not.toContain("Logind");
    });
});

describe("Login Form test", () => {
    it("check if form components displays properly", () => {
        const { getByTestId } = render(<Login />);
        const logo = getByTestId("avatar");
        const form = getByTestId("form");
        const email = getByTestId("emailId");
        const password = getByTestId("password");
        const button = getByTestId("button");
  
        expect(logo).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });

    it("check if form components has correct value", () => {
        const { getByTestId } = render(<Login />);
        const email = getByTestId("emailId");
        const password = getByTestId("password");
        const button = getByTestId("button");
    
        expect(email).toHaveTextContent("Email");
        expect(password).toHaveTextContent("Password");
        expect(button).toHaveTextContent("Sign In");
    });
});