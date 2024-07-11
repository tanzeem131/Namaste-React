import {render,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Test cases for contact us page",()=>{
    test("Contact us page render successfully",()=>{
        render(<Contact/>);
        const heading = screen.getAllByRole("heading");
        expect(heading).toHaveLength(2);
    });
    
    test("Contact us page have button",()=>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});