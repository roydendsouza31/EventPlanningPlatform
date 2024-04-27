import React ,{useState}from "react"
import "./login.css"

const Login=()=>{
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };
    return(
        <div className="login">
            {console.log("user",user)}
            <h1>Login</h1>
            <input type="text" placeholder="Enter your Email" name="email" value={user.email} onChange={handleChange}></input>
            <input type="password" placeholder="Enter your Password" name="password" value={user.password} onChange={handleChange}></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login