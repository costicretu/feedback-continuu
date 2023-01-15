import './CreateActivity.css';
import activity from "./../image/activity/ebook.png";
import Axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateActivity() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.post('http://localhost:8080/api/activity/', {
                name: formData.name,
                description: formData.description,
                unique_code: formData.unique_code,
                userId: 2,
            });
            console.log(response);
            navigate("/activity");
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const verify = () => {
        let x = document.getElementById('a').value;
        let y = document.getElementById('a2').value;
        let z = document.getElementById('a3').value;
        let text;
        if (x== '' || y == '' || z=='') {
            text = "Input not valid";
          } else {
            text = "Input OK";
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id='a'type="text" name="name" onChange={handleChange} placeholder="Name" />
            <input id='a2'type="text" name="description" onChange={handleChange} placeholder="Description" />
            <input id='a3'type="text" name="unique_code" onChange={handleChange} placeholder="Unique Code" />
            <button type="submit" onClick={verify}>Submit</button>
        </form>
    );
}

export default CreateActivity;