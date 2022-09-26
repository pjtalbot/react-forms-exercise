import React, {useState} from "react"
import NewBoxForm from "./NewBoxForm";

// Box- this component should display a div with a background color, width and height based on the props passed to it.

const Box = ({
    id,
    width = 200, 
    height = 200,
    backgroundColor = 'pink',
    handleRemove
}) => {
    
    const remove = () => handleRemove(id)
    
    
    return (
        <div>
            <div className="Box"
                style ={{
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor

                }}
            />
            <button onClick={remove}>X</button>
    
        </div>
    );
}

export default Box;