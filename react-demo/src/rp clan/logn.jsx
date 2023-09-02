import React ,{ useState } from 'react';


function Login(){
    const [fullname, setFullname] =useState('');
    const[password,setPassword]  =useState('');
    const [fullnameError,setFullnameError]=useState('')
    const[passwordError , setPasswordError] =useState('')

  const handleLogin=(e)=>{
    e.preventDefault();


    if(fullname.trim()===''){
        setFullnameError("enter your name")
    }
    if(password.trim()===''){
        setPasswordError("enter your password")
    }
  }


    return(
<div className="login-container">
            <div className="login-box">
                <form onSubmit={handleLogin}>
                    <div>
                        <p>Full Name<span className="required">*</span></p>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Enter your full name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                        {fullnameError && <p className="error-message">{fullnameError}</p>}
                        <p>Password<span className="required">*</span></p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                        <div className="remember-forgot">
                            <div>
                                <input type="checkbox" name="rememberMe" />
                                <label>Remember me</label>
                            </div>
                            <p>Forgot password?</p>
                        </div>
                        <button type="submit">Login</button>
                        <p>Don't have an account? SIGN UP</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;




