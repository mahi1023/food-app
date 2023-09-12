import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page Test cases", () => {

  // beforeAll(()=>{
  //   console.log("befire all")
  // });
  // beforeEach(()=>{
  //   console.log("befire each")
  // })
  it("should load contact us compoennet ", () => {
    //render the componnet to jsdom
    render(<Contact />);
    //finds all the heading sinside the contact componet
    const heading = screen.getByRole("heading");
    //find whether the heading was insid eth edoc are not
    expect(heading).toBeInTheDocument();

    // render(<Contact />);
    // const heading = screen.getByRole("heading", { name: "Contact Us" }); // Assuming the heading text is "Contact Us"
    // // Assert that the heading is present within the component
    // expect(heading).toBeInTheDocument();
  });

  it("should load btn imside contact compoennet ", () => {
    //render the componnet to jsdom
    render(<Contact />);
    //finds all the heading sinside the contact componet
    const button = screen.getByText("Submit");
    //find whether the heading was insid eth edoc are not
    expect(button).toBeInTheDocument();
  });

  it("to chekc the placeholder text", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
  });

  //suppose if there are mutiple things to test

  test("should load 2 input boxes on contact comp", () => {
    render(<Contact />);
    //returns jsx element
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(2);
  });
  // afterEach(()=>{
  //   console.log("afterEach ")
  // })

  // afterAll(()=>{
  //   console.log("afterEach all")
  // })
});
