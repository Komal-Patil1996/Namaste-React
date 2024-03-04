import { fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_MENU from "../mocks/mockRestaurantMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => 
Promise.resolve({
        json: () => Promise.resolve(MOCK_MENU)
    })

)

it("should render Restaurant Menu component", async () =>{
    await act(async () => { render(
        <BrowserRouter>
     <Provider store={appStore}> 
     <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>  
    </BrowserRouter>
 
    )
    })

    const accordionHeader = screen.getByText("Recommended (20)");
     
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("food-items");

    expect(foodItems.length).toBe(20);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument()


    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);


    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument()

    // its 22 because ItemList is same component for cart and restaurant menu

    expect(screen.getAllByTestId("food-items").length).toBe(22);

    fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}));

    expect(screen.getAllByTestId("food-items").length).toBe(20);

    expect(screen.getByText("Cart is Empty!! Add item to the cart")).toBeInTheDocument()

}) 