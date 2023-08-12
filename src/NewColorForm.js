import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import "./NewColorForm.css";


function NewColorForm ({addColor}) {
    const INIT_FORM_DATA = {
        colorName: "",
        colorValue: "#000000"
    };

    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const history = useHistory();

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Form submitted");
        addColor(formData);
        setFormData(INIT_FORM_DATA);
        history.push("/colors");
    }

    return (
        <div className="NewColorForm">

            <h1>Add a New Color</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="colorName">
                        Enter a name for this color:
                    </label>
                    <input
                        id="colorName"
                        name="colorName"
                        type="text"
                        placeholder="E.g. 'red', 'green', 'violet'..."
                        value={formData.colorName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="colorValue">
                        Choose a value for this color:
                    </label>
                    <input
                        id="colorValue"
                        name="colorValue"
                        type="color"
                        value={formData.colorValue}
                        onChange={handleChange}
                    />
                </div>

                <button>
                    Add color!
                </button>
            </form>

        </div>
    )
}


export default NewColorForm;
