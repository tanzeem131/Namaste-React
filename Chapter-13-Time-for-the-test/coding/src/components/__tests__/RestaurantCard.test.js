import "@testing-library/react"
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { MOCK_DATA } from "../mocks/resCardMockData";
import { WithPromotedLabel } from "../RestaurantCard";

it("Should render the restaurantcard component",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});

const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);

it("Should render the restaurant card component with Open label", () => {
    render(<PromotedRestaurantCard resData={MOCK_DATA} />);
    const label = screen.getByText("Open");
    expect(label).toBeInTheDocument();
});