import {render,screen} from "@testing-library/react"
import Contact from "../Contact"

test("Contact us page render successfully",()=>{
    render(<Contact/>);
    
    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});