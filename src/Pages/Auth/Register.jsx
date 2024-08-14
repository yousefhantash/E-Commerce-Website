import axios from "axios";
import Cookie from 'cookie-universal';
import { useState } from "react";
import { baseURL, REGISTER } from "../../API/Api";
import Loading from "../../Components/Loading/Loading";
import './Auth.css';

export default function Register() {
    
    // States

    // Register Form
    const [form, setForm] = useState({
        name: '',
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
            const response = await axios.post(`${baseURL}/${REGISTER}`, form);
            setLoading(false);
            const token = response.data.token;
            cookie.set('e-commerce',token);
            window.location.pathname = "/users"; 
        } catch (err) {
            setLoading(false);

            if (err.response) {
            
                if (err.response.status === 422) {
                    setErr('Email has already been taken!');
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
                        <h1>Register Now</h1>
                        <div className="custom-form">
                            <div className="form-control">
                                <input 
                                    id="name" 
                                    type="text" 
                                    placeholder="Enter Your Name" 
                                    value={form.name}
                                    name='name'
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="name">Name</label>
                            </div>
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
                            <button className="btn btn-primary" type="submit">Register</button>
                            {err && <span className="error">{err}</span>}
                        </div>
                    </form> 
                </div> 
            </div>
        </>
    );
}
