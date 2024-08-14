import axios from "axios";
import Cookie from 'cookie-universal';
import { useState } from "react";
import { baseURL, LOGIN } from "../../API/Api";
import Loading from "../../Components/Loading/Loading";
import './Auth.css';

export default function Login() {
    
    // States

    // Register Form
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    
    // Error
    const [err, setErr] = useState("");
    
    // Loading
    const [loading, setLoading] = useState(false);

    // Cookies
    const cookie = Cookie();



    // Handle Form Change
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    // Handle Form Submit
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErr(""); 
        
        try {
            const response = await axios.post(`${baseURL}/${LOGIN}`, form);
            setLoading(false);
            const token = response.data.token;
            cookie.set('e-commerce',token);
            window.location.pathname = "/users"; 
            
        } catch (err) {
            setLoading(false);

            if (err.response) {
            
                if (err.response.status === 401) {
                    setErr('Email or Password does not match!');
                } else if (err.response.status === 500) {
                    setErr('Please try again later.');
                } else {
                    setErr(`Error: ${err.response.status} - ${err.response.data.message || "An error occurred."}`);
                }
            }
        }
    }

    return (
        <>
            {loading && <Loading />}
            <div className="container">
                <div className="row h-100">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1>Login Now</h1>
                        <div className="custom-form">
                            <div className="form-control">
                                <input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Enter Your Email" 
                                    value={form.email}
                                    name='email'
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-control">
                                <input 
                                    id="password" 
                                    type="password" 
                                    placeholder="Enter Your Password" 
                                    value={form.password}
                                    name="password"
                                    onChange={handleChange}
                                    required
                                    minLength={8}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button className="btn btn-primary" type="submit">Login</button>
                            <div className="google-btn">
                                <a href={`http://127.0.0.1:8000/login-google`}>
                                <div className="google-icon-wrapper">
                                    <img
                                    className="google-icon"
                                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                                    alt="sign in with google"
                                    />
                                </div>
                                    <p className="btn-text">
                                        <b>sign in with google</b>
                                    </p>
                                </a>
                            </div>
                            {err && <span className="error">{err}</span>}
                        </div>
                    </form> 
                </div> 
            </div>
        </>
    );
}
