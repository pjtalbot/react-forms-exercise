import React, {useState} from "react"
import uuid from "react-uuid"

// NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.

const NewBoxForm = ({ createBox }) => {
    // const initialState = {
    //     width:200,
    //     height:200,
    //     color: 'black',

    // }
    const [formData, setFormData] = useState({
        width:'200',
        height:'200',
        backgroundColor: 'black',

    })
    const handleChange = e => {
        const { name, value } = e.target;
        // set state
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

  
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        createBox({...formData, id: uuid() })
        alert(`Created a ${formData.width} x ${formData.height} ${formData.backgroundColor}`)
        // setFormData(initialState)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="width">Box Width</label>
  <input name="width" id ='width'type="text" onChange={handleChange} value={formData.width}/>


                </div>
                <div>
                <label htmlFor="height">Box Height</label>
                <input name="height" id='height'type="text" onChange={handleChange} value={formData.height}/>
  

                </div>
                <div>
                <label htmlFor="backgroundColor">Box Color</label>
                <input name="backgroundColor" id='backgroundColor'type="text" onChange={handleChange}
  value={formData.backgroundColor}/>
                </div>
  
  <button id="newBoxButton">Add!</button>
</form>

        </div>
        
    )
}

export default NewBoxForm;