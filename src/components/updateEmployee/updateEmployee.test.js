import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import UpdateEmployee from "./updateEmployee";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;
beforeEach(() => {
  ({ getByTestId } = render(<UpdateEmployee />));
});


describe("Heading tags test", () => {

  it("should give correct header when update employee page rendered", () => {
    expect(getByTestId("update")).toHaveTextContent("Update Employee");
  });

  it("should check header when wrong header is given", () => {
    expect(getByTestId("update")).not.toHaveTextContent("UpdateEmployee");
  });
});

describe("Employee Details Update Form test", () => {

  test("check if form components displays properly", () => {
    const form = getByTestId("form");
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const salary = getByTestId("salary");
    const department = getByTestId("department");
    const email = getByTestId("email");
    const gender = getByTestId("gender")
    const button = getByTestId("button");

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
    expect(department).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("check if form components has correct value", () => {
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const salary = getByTestId("salary");
    const department = getByTestId("department");
    const email = getByTestId("email");
    const gender = getByTestId("gender");

    expect(firstName).toHaveTextContent("First Name");
    expect(lastName).toHaveTextContent("Last Name");
    expect(salary).toHaveTextContent("Salary");
    expect(department).toHaveTextContent("Department");
    expect(salary).toHaveTextContent("Salary");
    expect(email).toHaveTextContent("Email");
    expect(gender).toHaveTextContent("Gender");
  });
});