import React, { useState, useEffect } from "react";

function YourComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const token = "RzrZoK7N17rgUguTiJKD";
  const id = "2759";
  const serverKey = "3w99V63pW7tJ7vavGXtCKo8cp";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://test.e-prathibha.com/apis/question_view", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            tokenu: token,
            Id: id,
            server_key: serverKey,
          },
          body: JSON.stringify({
            id: 1,
            exam_result_id: 62,
            type: "bookmark",
            qid: 3516,
          }),
        });
        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);
        console.log("API response:", responseData);
        console.log("data:", responseData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token, id, serverKey]);

  const Submit=()=>{
    console.log("successsfully submited")
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          {/* <p>Exam ID: {data[0].Exam.id}</p>
          <p>Exam Name: {data[0].Exam.name}</p>
          <p>Exam Duration: {data[0].Exam.duration}</p>
          <p>Question ID: {data[0].Question.id}</p>
          <p>Question Type ID: {data[0].Question.qtype_id}</p>
          <p>Subject ID:{data[0].Question.subject_id}</p> */}
          <p>Questions:{data[0].Question.question.above}</p>
          <label> 
          <input type="radio" name="option" value="option1" /> option1:
          {data[0].Question.option1}
          </label>
           <br></br>
          <label> 
          <input type="radio" name="option" value="option2" /> option2:
          {data[0].Question.option2}
          </label>
          <br></br>

          <label> 
          <input type="radio" name="option" value="option3" /> option3:
          {data[0].Question.option3}
          </label>
          <br></br>
          <label> 
          <input type="radio" name="option" value="option4" /> option4:
          {data[0].Question.option4}
          </label>
          <br></br>
          {/* <p>Expired: {data[0].expired.toString()}</p> */}
        </div>
      ) : (
        <p>No data available.</p>
      )}
      <button onClick={Submit}> Submit </button>
      <button> Save&Next </button>
      <button> Markforreview </button>
    </div>
  );
}

export default YourComponent;
