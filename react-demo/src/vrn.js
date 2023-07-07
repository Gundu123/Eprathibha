import { useState } from "react";

let Tdd=()=>{
    let [user,setuser]=useState("")
    let[arr,setarr]=useState([])
    
    let Submit=(e)=>{
        setuser(e.target.value);
        
    }
    let Sum=()=>{
        setarr([...arr,user])
        setuser('')
    }
    // console.log(arr)
    let Delete=(val,ind)=>{
        let Del=[...arr]
        Del.splice(ind,1)
        setarr(Del)

    }
    let Edit=(val,ind)=>{
        let Edt=[...arr]
        let Edt1=prompt('Editing',Edt[ind])
        if(Edt1 !== null){
            Edt[ind]=Edt1
            setarr(Edt)
        }
    }
    return(
        <div>
            <input type="text" onChange={Submit}
            value={user} />
            <button onClick={Sum}>Add todo</button>
            {arr.map((val,ind)=>(
                <li key={ind}>
                    {val}
                   
                    {/* <button onClick={() =>Delete(val,ind)}>Delete</button> */}
                    <button onClick={()=>Delete(val,ind)}>Delete</button>
                    <button onClick={() =>Edit(val,ind)}>Edit</button>
                </li>
            ))}
        </div>
    )
}
export default Tdd