import React, {useState }from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import {
    Link
  } from 'react-router-dom';

import { auth, createUserProfilDocument } from "../../Firebase/Firebase";

import "./SignUp.scss";

const SignUp = () => {
    const [form, setForm] = useState({ displayName: "", email: "", password: "", confirmPassword: "" });

    const handleSubmit = async e => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = form;

        if(password !== confirmPassword) {
            alert("Podane hasła różnią się");
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            

            await createUserProfilDocument(user, {displayName});

            setForm({displayName: "", email: "", password: "", confirmPassword: ""});


        } catch(error) {
            console.log(error)

        }
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setForm(prevState =>{
            return {
                ...prevState,
                [name]: value,

            };
        });
        console.log(form)
    };


    return (
        <div className="sign-up__content">
             <Link to="/">
                <Logo color="#000000"/>
            </Link>
            <h2>Zarejestruj się za darmo i odkrywaj</h2>
            <span>Zarejestruj się za pomocą adresu e-mail</span>
            <form onSubmit= {handleSubmit}>
                <FormInput 
                    type= "text"
                    name= "displayName"
                    value= {form.displayName}
                    onChange={handleChange}
                    label= "Display Name"
                    required
                />
                <FormInput 
                    type= "email"
                    name= "email"
                    value= {form.email}
                    onChange={handleChange}
                    label= "Email"
                    required
                />
                <FormInput 
                    type= "password"
                    name= "password"
                    value= {form.password}
                    onChange={handleChange}
                    label= "Password"
                    required
                />
                <FormInput 
                    type= "password"
                    name= "confirmPassword"
                    value= {form.confirmPassword}
                    onChange={handleChange}
                    label= "Confirm Password"
                    required
                />
                <Button type= "submit" color= "black" text="Zarejestruj się"/>
            </form>
        </div>
    )
    
}

export default SignUp;