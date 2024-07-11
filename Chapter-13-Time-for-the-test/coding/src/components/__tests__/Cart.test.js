import "@testing-library/jest-dom"
import "@testing-library/react"
import { render,screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantCard"
import MOCK_ITEM_LIST_DATA  from "../mocks/mockItemListData.json"
import appStore from "../../utils/appStore"
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() =>
    Promise.resolve({
        json:() => Promise.resolve(MOCK_ITEM_LIST_DATA)
    })
)

it("Should search for pizza input",async ()=>{
    await act(async() => 
       render(
       <Provider store={appStore}>
         <BrowserRouter>
            <RestaurantMenu />;
         </BrowserRouter>
       </Provider>    
       )
    );

    const accordionHeader = screen.getByText("Recommended(20)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);
})

