import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Activity.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Activity() {
    const [activities, setActivities] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        Axios.get("http://localhost:8080/api/activity/").then(result => {
            setActivities(result.data)
            console.log(result.data)
        })
    }, [])

    const createActivity = () => {
        navigate("/createActivity");

    } 

    const logout = () => {
        navigate("/");
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.post('http://localhost:8080/api/feedback/', {
                reactionId: 1,
                userId: 1,
                activityId: 1  
            });
            console.log(response);
            navigate("/activity");
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="activity-container">
            <button onClick={createActivity} id="creeaza" >Creează activitate</button>
            <div className='aaa'>
            <button onClick={logout} id="logout" >Deloghează-te</button>

            </div>

            {activities.map((activity, index) => (
                <Card key={index} className="activity-card">
                    <Card.Body>
                        <Card.Title className='name'>{activity.name}</Card.Title>
                        <Card.Text className='description'>{activity.description}</Card.Text>
                        <div className='div1'>
                            <Button variant="primary" id='btn1' onClick={handleSubmit}></Button>
                            <Button variant="primary" id='btn2' onChange={handleSubmit}></Button>
                            <Button variant="primary" id='btn3' onChange={handleSubmit}></Button>
                            <Button variant="primary" id='btn4' onChange={handleSubmit}></Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}


export default Activity;