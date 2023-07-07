import React, { useState } from 'react';
import axios from 'axios';
import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const[val,setval]=useState('')
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
 // const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://test.e-prathibha.com/apis/register', {
        email,
        name,
        password,
        confirmPassword,
        phone
      });

      console.log('response data:', response.data);
      setval(response.data)
      //setResponseMessage('Registration successful!');
    } catch (error) {
      console.log('error fetching data:', error);
     // setResponseMessage('Error: ' + error.response.data.data);
    }
  };

  return (
    <div className="bhav">
    <div className="reg">
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br></br>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Name:</label><br></br>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Password:</label><br></br>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Confirm Password:</label><br></br>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <label>Mobile Number:</label><br></br>
        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <input type="submit" value="Submit" style={{'border-radius':'6px','margin-top':'10px','background-color':'blue'}} />
      </form>
      {/* <p>{responseMessage}</p> */}
      <p>{val.data}</p>
     <Link to="/register/verify"> <button style={{'background-color':'blue','border-radius':'6px'}}>verify&save</button></Link>
    </div>
    </div>
  );
};

export default Register;
