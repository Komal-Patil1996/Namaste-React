import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/restaurantCard.json";
import "@testing-library/jest-dom";
import {promotedRestaurantCard} from "../RestaurantCard";



it("should render a restaurant card component with props data", () =>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Glen's Bakehouse");

    expect(name).toBeInTheDocument()
});

it("should render a restaurant card  component with promoted label", () =>{
    const PromotedRestaurantCard = promotedRestaurantCard(RestaurantCard);

    if(MOCK_DATA.info.avgRating === 4.4){
        render(<PromotedRestaurantCard resData={MOCK_DATA} />);
    }


    const promoted = screen.getByText("Promoted");

     
    expect(promoted).toBeInTheDocument()
});