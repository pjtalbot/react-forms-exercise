import React, { useState } from "react"
import Box from "./Box.jsx"
import NewBoxForm from "./NewBoxForm.jsx"

// BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component

const BoxList = () => {
    return (
        <div className="BoxList">
        <NewBoxForm />
        </div>
    )
        
}


export default BoxList