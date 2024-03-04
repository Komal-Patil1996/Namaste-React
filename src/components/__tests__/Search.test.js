import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantDataList.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
});

it("should search Restaurant list for pizza test input", async () =>{

    // whenever we are using state update we need to wrap render fn into act function

    await act(async () => 
    render(
     <BrowserRouter>
      <Body/>
     </BrowserRouter>   
   ));
     const allCards = screen.getAllByTestId("resCard");

     expect(allCards.length).toBe(20);


    const searchBtn = screen.getByRole("button", {name: "search"});

     const searchInput = screen.getByTestId("searchInput");

     fireEvent.change(searchInput, {target: {value: "pizza"} });

     fireEvent.click(searchBtn);

     const card = screen.getAllByTestId("resCard");

     expect(card.length).toBe(2);

});

it("should filter top rated top rated restaurant", async () =>{

    await act(async () =>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));

    const allCards = screen.getAllByTestId("resCard");

    expect(allCards.length).toBe(20);

    const topRatedBtn = screen.getByTestId("top")

    fireEvent.click(topRatedBtn);

    const cardsTopRated = screen.getAllByTestId("resCard");


    expect(cardsTopRated.length).toBe(4);

})