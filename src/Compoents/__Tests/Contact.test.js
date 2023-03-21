import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

describe("testing the contact component", () => {
    // written a test case to find the button is present in contact page
    test("render the component has a button", () => {
        render(<Contact />);
        const buttonList = screen.getByRole('button', {  name: /submit/i})
        expect(buttonList).toBeInTheDocument();
    })

    test("testing Email is present in the component", () => {
        render(<Contact />);
        const component = screen.getByText(/email/i)
        expect(component).toBeInTheDocument();

      
    })
    
})