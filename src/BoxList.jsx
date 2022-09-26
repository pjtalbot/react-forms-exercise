import React, { useState } from "react"
import Box from "./Box.jsx"
import NewBoxForm from "./NewBoxForm.jsx"

// BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    }
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    };

    const allBoxComponents = boxes.map(box => {
        return (
            <Box 
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        handleRemove={remove}
        backgroundColor={box.backgroundColor}
        />

        )
        
    })

    return (
        <div className="BoxList">
        <NewBoxForm createBox={addBox}/>
        {allBoxComponents}
        </div>
    )
        
}


export default BoxList;