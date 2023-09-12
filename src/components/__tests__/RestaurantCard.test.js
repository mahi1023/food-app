import { render, screen } from "@testing-library/react"
import RestroCard from "../RestroCard"
import MOCK_DATA from '../mocks/resCardMock.json';
import "@testing-library/jest-dom";
import { withRestroCardWithPromoted } from "../RestroCard";
it("should render resturant card component with props data",()=>{
//here we need to import the mock data of the rescard which we copied from console
    render(<RestroCard resData ={MOCK_DATA}/>);
    const namOfRes= screen.getByText("Al Rabea Al Arabi Cafeteria");
    expect(namOfRes).toBeInTheDocument();
})

// it("should render resturant card component with promoted lbabel",()=>{
//     //here we need to import the mock data of the rescard which we copied from console
//     const WithLabel = withRestroCardWithPromoted(<RestroCard resData ={MOCK_DATA}/>)
//         render(<WithLabel resData ={MOCK_DATA}/>);
//         const p = screen.getByText("Opened")
//         expect(p).toBeInTheDocument();
//     })