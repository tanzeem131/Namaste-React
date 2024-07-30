import "@testing-library/jest-dom"
import "@testing-library/react"
import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_RES_LIST_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_RES_LIST_DATA);
        }
    });
});

it("Should search for Pizza input",async ()=>{
    await act(async() => render(
       <BrowserRouter>
        <Body/>;
       </BrowserRouter>    
       )
    );
    const SearchBtn = screen.getByRole("button",{name:"Search"});

    const SearchInput = screen.getByTestId("SearchInput");

    fireEvent.change(SearchInput,{target:{value:"pizza"}});

    fireEvent.click(SearchBtn)

    const MatchedCards = screen.getAllByTestId("resCard");
    
    expect(MatchedCards.length).toBe(1);
})