import "@testing-library/jest-dom"
import "@testing-library/react"
import { render,screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantCard"
import { MOCK_ITEM_LIST_DATA } from "../mocks/mockItemListData"
import appStore from "../../utils/appStore"
import {Provider} from "react-redux"

global.fetch=jest.fn(() =>
    Promise.resolve({
        json:()=> Promise.resolve(MOCK_ITEM_LIST_DATA)
    })
)

it("Should search for momo input",async ()=>{
    await act(async() => 
       render(
       <Provider store={appStore}>
        <RestaurantMenu />;
       </Provider>    
       )
    );

    const accordionHeader = screen.getByText("New Thin n Crispy Pizzas(6)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(6);
})