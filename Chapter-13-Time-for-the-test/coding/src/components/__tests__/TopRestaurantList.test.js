import "@testing-library/jest-dom"
import "@testing-library/react"
import { fireEvent, getAllByRole, getAllByTestId, render,screen } from "@testing-library/react"
import Body from "../Body"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"
import MOCK_RES_LIST_DATA from "../mocks/mockResListData.json"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_RES_LIST_DATA);
        }
    });
})

it("Should Display the top rated restaurant cards",async ()=>{
    await act(async() => render(
       <BrowserRouter>
        <Body/>
       </BrowserRouter>
    )
);

    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect (cardBeforeFilter.length).toBe(8);
    
    const TopRatedRestaurantbtn = screen.getByRole("button",{name:"Top Rated Restaurant"});
    fireEvent.click(TopRatedRestaurantbtn)

    const TopRatedRestaurant = screen.getAllByTestId("resCard");
    expect(TopRatedRestaurant.length).toBe(6);
})