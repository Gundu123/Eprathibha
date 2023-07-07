// import React,{useEffect,useState} from "react";
// import axios from "axios";
// import {useParams} from "react-router-dom";
// const Questions=({serverKey,id,tokenu})=>{
//     const [questions, setQuestions] = useState([]);
//     const {examId}=useParams();
//     const[error,setError]=useState(null);

//     useEffect(()=>{
//         const fetchData = async ()=>{
//             try{
//                 const response = await axios.get('http://test.e-prathibha.com/apis/start_exam?examId=24',
//                 {
//                     headers:{
//                         id,
//                         server_Key:serverKey,
//                         tokenu
//                     }
//                 });
//                 console.log('response data:', response.data.data.exam)
//                 setQuestions(response.data.data.exam)
//             } catch(error){
//                 console.log(error)
//                 setError(error)
//             }
//         };
//         fetchData();
//     },[examId, id, tokenu, serverKey]);
//     if(!Array.isArray(questions)){
//         return<div>no qns</div>
//     }

//     return <div>
//       {questions.map((bhav,ind)=>{
//                 return <div key={ind}>
//                     <p>{bhav.Question.question.above}</p>
//                     <p><input type="radio"name="option" value="option1"/>{bhav.Question.option1}</p>
//                     <p><input type="radio"name="option" value="option2"/>{bhav.Question.option2}</p>
//                     <p><input type="radio"name="option" value="option3"/>{bhav.Question.option3}</p>
//                     <p><input type="radio"name="option" value="option4"/>{bhav.Question.option4}</p>
//                     </div>
//         `   `
//       })
//     }
//     <button>FinishExam</button>
//       </div>  
    
    
// }
// export default  Questions;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

const Questions = ({ serverKey, id, tokenu }) => {
  const [questions, setQuestions] = useState([]);
  const { examId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
        'http://test.e-prathibha.com/apis/start_exam?examId=24',

          {
            headers: {
              id,
              server_key: serverKey,
              tokenu,
            },
          }
        );
        console.log("response data:", response.data.data.exam);
        setQuestions(response.data.data.exam);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [examId, id, tokenu, serverKey]);

  if (!Array.isArray(questions)) {
    return <div>no qns</div>;
  }

  return (
    <div>
      {questions.map((bhav, ind) => {
        return (
          <div key={ind}>
            <p>{bhav.Question.question.above}</p>
            <p>
              <input type="radio" name="option" value="option1" />
              {bhav.Question.option1}
            </p>
            <p>
              <input type="radio" name="option" value="option2" />
              {bhav.Question.option2}
            </p>
            <p>
              <input type="radio" name="option" value="option3" />
              {bhav.Question.option3}
            </p>
            <p>
              <input type="radio" name="option" value="option4" />
              {bhav.Question.option4}
            </p>
          </div>
        );
      })}
     {/* <Link to="finish"> <button style={{'background-color':'blue'}}>FinishExam</button></Link> */}
    </div>
  );
};

export default Questions;
