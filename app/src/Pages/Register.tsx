import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, TextField } from "../MuiCompos";
import { registerUser } from "../Redux";

interface RegisterUser {
    email: string;
    password: string;
    password2: string;
    name: string;
    tc: boolean;
}

const Register = () => {

    const dispatch = useDispatch()
    const [userRegisterForm, setUserRegiserForm] = useState<RegisterUser>({
        email: '',
        password: '',
        password2: '',
        name: '',
        tc: false,
    });

    const handleRegisterForm = (event: any) => {
        setUserRegiserForm({
            ...userRegisterForm,
            [event.target.name] : event.target.value
        });
    }

    const handleRegisterFormSubmit = () => {    
        dispatch(registerUser({
            email: userRegisterForm.email, 
            password: userRegisterForm.password, 
            password2: userRegisterForm.password2, 
            name: userRegisterForm.name,
            tc: userRegisterForm.tc
        }));
        setUserRegiserForm({
            email: '',
            password: '',
            password2: '',
            name: '',
            tc: false
        });
        redirect("/login");
    }

    return (
        <div className="login-wrapper">
            <h4>Hey Register Here!...</h4>
            <div>
                <form autoComplete="off">
                    <div>
                        <TextField id="standard-basic" variant="standard" type="email" label="Email" name="email" onChange={handleRegisterForm} value={userRegisterForm.email} />
                    </div>
                    <div>
                        <TextField id="standard-basic" variant="standard" type="password" label="Password" name="password" onChange={handleRegisterForm} value={userRegisterForm.password} />
                    </div>
                    <div>
                        <TextField id="standard-basic" variant="standard" type="password" label="Re-Password" name="password2" onChange={handleRegisterForm} value={userRegisterForm.password2} />
                    </div>
                    <div>
                        <TextField id="standard-basic" variant="standard" type="text" label="Name" name="name" onChange={handleRegisterForm} value={userRegisterForm.name} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center login-actions">
                        <Button variant="contained" color="success" onClick={handleRegisterFormSubmit}> Sign Up </Button>
                        <Link to='/login'><p>Have already an account!..</p></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
