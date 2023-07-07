import React, { useState } from "react";
import axios from "axios";
import './login.css';
//import { useNavigate } from "react-router-dom";
//import Examlist from "./examlist";
import { Link } from 'react-router-dom'
const Login= () =>{
    const [val,setval]=useState('') 
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
   // const Navigation=useNavigate();

    const handlelogin= async(e)=>{
        e.preventDefault();
         try{
            const response=await axios.post('https://test.e-prathibha.com/apis/login',{
                email,password
            });
            console.log('response data:',response.data);
            setval(response.data)
            
           
         } catch(error){
            console.log('error fetching data:',error);
         }
    }
    
    
    return(
    <div className="form">
        <form onSubmit={handlelogin}>
            <label >Email</label><br></br>
            <input type="text" name="email" style={{'padding':'6px'}} onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
            <label>password</label><br></br>
            <input type="password" name="password" style={{'padding':'6px'}} onChange={(e)=>setPassword(e.target.value)}/>
            <br></br>
          
            <input type="submit" value="Login" style={{'border-radius':'6px','margin-top':'10px','background-color':'blue','padding':'20px','padding':'6px'}}/>
            {/* //<Link to="/login/examlist"><button>ente</button></Link> */}
        </form>
        
        <p>{val.data && val.data.Message}</p>
        <Link to="/login/examlist"><button>enter the test</button></Link>
        {/* <Link to="register"><p>dont have account singup</p></Link>
        */}
    </div>
    );
};
export default Login;