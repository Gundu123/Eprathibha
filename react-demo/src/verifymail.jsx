import React, { useState } from "react";
import axios from "axios";
import './verify.css'

const Verify=()=>{
    const [val,setval]=useState('')
    const[reg_code,setreg_code]=useState('');


    const Submit=async(e)=>{
        e.preventDefault();
       try{
        const response=await axios.post('https://test.e-prathibha.com/apis /verifyEmail',{
         reg_code
        });

        console.log('response data:',response.data)
        setval(response.data)
       }catch(error){
        console.log('error fetching data:', error);
       }

    }
    return(
        <div className="verify">
            <form onSubmit={Submit}>
                <input type="test"  value={reg_code} onChange={(e)=>setreg_code(e.target.value)}/>
                <input type="submit" value="submit" style={{'margin-left':'8px','background-color':'blue','border-raduis':'6px'}}/>
            </form>
 <p>id: {val.data && val.data.id}</p>
<p>Tokenu: {val.data && val.data.token}</p>
<p>Message: {val.data && val.data.message}</p>

        </div>
    )
}
export default Verify;