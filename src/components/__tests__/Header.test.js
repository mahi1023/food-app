import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
it("should render header component with login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);
    const loginButton = screen.getByRole("button",{name:"Login"});
    // const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument();
});

it("should render header comp with cart items 0",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart(0 items)");
    expect(cartItems).toBeInTheDocument();
});
it("should render header comp with cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});
it("should change login button to logout on click og button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginBtn);
    const logOutBtn = screen.getByRole("button",{name:"LogOut"})
    expect(logOutBtn).toBeInTheDocument();
});