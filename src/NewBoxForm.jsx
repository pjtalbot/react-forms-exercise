import React, {useState} from "react"

// NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.

const NewBoxForm = () => {
    const [formData, setFormData] = useState({
        width:'',
        height:400,
        color: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        // set state
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        alert(`Created a ${formData.width} x ${formData.height} ${formData.color}`)
    }
    return (
        <form onSubmit={handleSubmit}>
  <label htmlFor="width">Box Width</label>
  <input name="width" type="number" onChange={handleChange} />
  <label htmlFor="height">Box Height </label>
  <input name="height" type="number" onChange={handleChange}/>
  <label htmlFor="color">Box Color</label>
  <input name="color" type="color" onChange={handleChange} defaultValue="black"/>
  <button>Add!</button>
</form>
    )
}

export default NewBoxForm;