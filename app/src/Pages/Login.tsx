import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Redux";
import { Button, TextField } from "../MuiCompos";

interface LoginUser {
    email: string;
    password: string;
}

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginUserForm, setLoginUserForm] = useState<LoginUser>({
        email: '',
        password: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLoginChangeForm = (event: any) => {
        setLoginUserForm({
            ...loginUserForm,
            [event.target.name]: event.target.value
        });
    }

    const handleLoginFormSubmit = () => {
        dispatch(loginUser(loginUserForm));
        navigate('/');
    }

    return (
        <div className="login-wrapper">
            <h4>Hey Login Here!...</h4>
            <div>
                <form action="" autoComplete="off">
                    <div>
                        <TextField id="standard-basic" variant="standard" label="Username or email" name="email" onChange={handleLoginChangeForm}/>
                    </div>
                    <div>
                        <TextField id="standard-basic" variant="standard" type="password" label="Password" name="password" onChange={handleLoginChangeForm}/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center login-actions">
                        <Button variant="contained" color="primary" onClick={handleLoginFormSubmit}> Login </Button>
                        <p>Forget Password?</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
