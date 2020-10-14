import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { signInWithGoogle, auth } from "../../Firebase/Firebase";


const SignIn = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefeult();

        const{ email, password } = form;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setForm({email:"", password: ""});
        } catch (error) {
            console.log(error);
        }
        
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
                <Button type="submit" text="Zaloguj się" color="black"></Button>
                <Button type="button" onClick={signInWithGoogle} text="Zaloguj się z Google" color="black"></Button>
            </form>
        </div>
    )

}


export default SignIn;