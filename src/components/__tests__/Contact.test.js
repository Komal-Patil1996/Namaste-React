import { screen, render } from "@testing-library/react";
import  Contact  from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {

    // rendered on the JSDOM
    render(<Contact/>);

    //querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

});

describe("contact us page test case", () =>{

    beforeAll(() =>{
        // console.log("Before all test cases");
    });

    beforeEach(() => {
        // console.log("Before each test cases");
    });

    afterEach(()=>{
        // console.log("After each test cases");
    });

    afterAll(() =>{
        // console.log("After all test cases");
    })


test("should load contact us component", () => {

    // rendered on the JSDOM
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

});

test("should load input name component", () => {

    // rendered on the JSDOM
    render(<Contact/>);

    const input = screen.getByPlaceholderText("name")

    expect(input).toBeInTheDocument();

});

it("should load 2 input in the component", () => {

    // rendered on the JSDOM
    render(<Contact/>);

    const inputbox = screen.getAllByRole("textbox")
 
    //console.log(inputbox[0]); // this gives us JSX element or React element


     expect(inputbox.length).toBe(2);

});
});