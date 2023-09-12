// import { fireEvent, render,screen } from "@testing-library/react"
// import Body from "../Body"
// import '@testing-library/jest-dom';
// import MockData from '../mocks/mockReslist.json';
// import { BrowserRouter } from "react-router-dom";
// import {act} from 'react-dom/test-utils'
// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json:()=>{
//             return Promise.resolve(MockData)
//         }
//     });
// })
// it("should render the body component with search list with burger iput ",async()=>{
//    await act(async ()=>
//    render(<BrowserRouter>
//    <Body/>
//    </BrowserRouter>)
//    ) 
   
//    const cardsBeforeSearch = screen.getAllByTestId('resCard')
//    expect(cardsBeforeSearch.length).toBe(20);
//    const seatchBtn = screen.getByRole("button",{name:"Search"});
//    const inputSearch = screen.getByTestId('searchInput');
//      //here {} i sumilating what we get inside the chnage event of the input onChnage event
//    fireEvent.change(inputSearch,{target:{value:"burger"}})
//    fireEvent.click(seatchBtn)
//    //screen should load 4 cards
//    const cards = screen.getAllByTestId('resCard')
//    expect(cards.length).toBe(4);
// })

// it("should render the body component with top rated res list with burger iput ",async()=>{
//     await act(async ()=>
//     render(<BrowserRouter>
//     <Body/>
//     </BrowserRouter>)
//     ) 
    
//     const cardsBeforeSearch = screen.getAllByTestId('resCard')
//     expect(cardsBeforeSearch.length).toBe(20);
//     const topRatedBtn = screen.getByRole("button",{name:"Top Rated Resturant"});
//     fireEvent.click(topRatedBtn)
//     //screen should load 4 cards
//     const cardsAfterFilter = screen.getAllByTestId('resCard')
//     expect(cardsAfterFilter.length).toBe(13);
//  })