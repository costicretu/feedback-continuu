import './CreateActivity.css';
import name2 from "./../image/activity/ebook.png";
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

    const goback = () => {
        navigate("/activity");
    }

    return (

        <form onSubmit={handleSubmit}>
            <button id='btn' onClick={goback}>Înapoi</button>
            <img src={name2} alt="name2" className="name2" />
            <div className='a'>
                <input id='a' type="text" name="name" onChange={handleChange} placeholder="Denumire" />
            </div>
            <div className='a2'>
                <input id='a2' type="text" name="description" onChange={handleChange} placeholder="Descriere" />
            </div>
            <div className='a3'>
                <input id='a3' type="text" name="unique_code" onChange={handleChange} placeholder="Cod unic" />
            </div>
            <div className='a4'>
                <button id='btn' type="submit">Creează</button>
            </div>
        </form>
    );
}

export default CreateActivity;