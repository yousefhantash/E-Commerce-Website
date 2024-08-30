import axios from "axios";
import Cookie from 'cookie-universal';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
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
                <div className="row" style = {{height: '100vh'}}>
                    <Form className="form" onSubmit={handleSubmit}>
                        <h1>Login Now</h1>
                        <div className="custom-form">
                            <Form.Group className="form-custom" controlId="exampleForm.ControlInput1">
                                <Form.Control 
                                type="email" 
                                placeholder="Enter Your Email" 
                                value={form.email}
                                name="email"
                                onChange={handleChange}
                                required
                                />
                                <Form.Label>Email</Form.Label>
                            </Form.Group>
                            <Form.Group className="form-custom" controlId="exampleForm.ControlInput2">
                                <Form.Control 
                                type="password" 
                                placeholder="Enter Your Password" 
                                value={form.password}
                                name="password"
                                onChange={handleChange}
                                required
                                minLength='6'
                                />
                                <Form.Label>Password</Form.Label>
                            </Form.Group>
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
                    </Form> 
                </div> 
            </div>
        </>
    );
}
