import { fireEvent, render,screen } from "@testing-library/react"
import ResturantMenu from "../ResturantMenu"
import Mock_data from '../mocks/resMenu.json';
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import {act} from 'react-dom/test-utils'
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from '../Cart'
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_data)
        }
    });
})

it("should load resturant menu componnet",async()=>{
    await act(async () => render(<BrowserRouter><Provider store={appStore}>
        <Header/>
        <ResturantMenu/></Provider>
        <Cart></Cart>
        </BrowserRouter>));

    const accodHeader = screen.getByText('Briyani (5)');

    fireEvent.click(accodHeader);

    expect(screen.getAllByTestId('fooditems')).toBe(5);

    expect(screen.getByText("Cart(0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button",{name:"Add +"})
    fireEvent.click(addBtns[0])// on click on add we need to modify header

    expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1])
    expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();

    //to test the card page whethever the food items added or not

    expect(screen.getAllByTestId('fooditems')).toBe(7);

    // on clear cart remove test
   fireEvent.click( screen.getByRole("button",{name:"Clear Cart"}))
   expect(screen.getAllByTestId('fooditems')).toBe(5);
   expect(screen.getByText('Please Add Items to the Cart')).toBeInTheDocument();


})