import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment , decrement } from "./action";

const Component=()=>{
    const count=useSelector(state=>state.count)
    const dispatch =useDispatch();
    return(
        <div>
            <h2>count:{count}</h2>
            <button onClick={()=> dispatch(increment())}>inc</button>
            <button onClick={()=> dispatch(decrement())}>dec</button>
        </div>
    )
}

export default Component;