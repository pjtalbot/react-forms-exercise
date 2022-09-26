import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", backgroundColor = "peachpuff") {
    const heightInput = boxList.getByLabelText("Box Height");
    const widthInput = boxList.getByLabelText("Box Width");
    const backgroundInput = boxList.getByLabelText("Box Color");
    fireEvent.change(backgroundInput, { target: { value: backgroundColor} });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add!");
    fireEvent.click(button);
  }

  it("renders the list", function() {
    render(<BoxList />)
  })

  it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });
  

  it("can add a new box", function() {
    const boxList = render(<BoxList />);
  
    // no boxes yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
  
    addBox(boxList);
  
    // expect to see a box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
  
    // expect(asFragment()).toMatchSnapshot();
  });

  it("can remove a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);
  
    const removeButton = boxList.getByText("X");
  
    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });