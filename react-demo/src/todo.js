import { useState } from "react"
//import  Form  from "react-bootstrap/Form"



let Todo=()=>{
    let [arry, setarry]=useState([])
    let [array1,setarray1]=useState("")

    let Submit1=(e)=>{
        console.log(e.target.value);
        setarray1(e.target.value)
    }
   // console.log(array1,"bhav")
    let Add1=()=>{
        
        setarry([...arry,array1]);
        setarray1('')
    }
   // console.log(arry);
    let Delete1=(val,ind)=>{
        let Del=[...arry]
        Del.splice(ind,1)
        setarry(Del)
    }
    let Edit1=(val,ind)=>{
       let Edit2=[...arry]
       let Edit3=prompt('Editing',Edit2[ind])
       if(Edit3 !== null){
        Edit2[ind]=Edit3
        setarry(Edit2)
       }
    }
    return(
     <div style={{marginLeft:650, marginTop:200}} >
        <h1>Todo List</h1>
            <div>
            <input type="text" value={array1} onChange={Submit1} />
            <button onClick={Add1}>Add Todo</button>
            </div>
        <ul>
        {arry.map((val, ind) => (
          <li key={ind} style={{fontSize:20}}>
            {val}
            <button onClick={() => Delete1(val,ind)}>Delete</button>
            <button onClick={() => Edit1(val,ind)}>Edit</button>
          </li>
            ))}
            </ul>
        </div>
    )
}
export default Todo;