import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";



const SignIn = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefeult();
        setForm("");
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState =>{
            return {
                ...prevState,
                [name]: value,

            };
        });
    };

    return (
        <div className="sign-in__content">
            <h2>Zaloguj się aby kontynuować</h2>
            <span>Adres email i hasło</span>
            <form onSubmit={handleSubmit}> 
                <FormInput
                 name ="email" 
                 type="email" 
                 value={form.email} 
                 required 
                 handleChange={handleChange}
                 label= "Email"
                />
                <FormInput 
                    name ="password" 
                    type="password" 
                    value={form.password} 
                    required 
                    handleChange={handleChange}
                    label= "Password"
                />
                <input type="submit" value= "Zaloguj się"></input>
            </form>
        </div>
    )

}


export default SignIn;