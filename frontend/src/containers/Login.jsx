import './Login.css';
import profile from "./../image/login/human.png";
import em from "./../image/login/email.png";
import pass from "./../image/login/pass.png";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState, useRef, useEffect } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = () => {
        Axios.post("http://localhost:8080/api/user/login", {
            email: email,
            password: password
        }).then(()=>{
                localStorage.setItem("email", email);
                console.log("merge")
                navigate("/activity");
        }).catch(() =>{
            console.log("credentialele sunt gresite")
        })
    }
     
    return (
        <div className="main-login">
            <div className="sub-main-login">
                <div>
                    <div className="imgs-login">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />
                        </div>
                    </div>
                    <div>
                        <h1>Loghează-te</h1>
                        <div>
                            <img src={em} alt="email" className="email" />
                            <input id="email" type="text" placeholder="Email" className="name" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="email" />
                            <input id="password" type="password" placeholder="Parolă" className="name"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="login-button">
                            <button type="submit"  onClick = {login}>Accesează</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;