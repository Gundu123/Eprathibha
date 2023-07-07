
import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";
import "./pallete.css";

const Question = ({ serverKey, id, tokenu }) => {
  const [questions, setQuestions] = useState([]);
  //const { examId } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://test.e-prathibha.com/apis/start_exam?examId=24",
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
  }, [ id, tokenu, serverKey]);

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const Bhav = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleOptionSelect = () => {
    setAnsweredQuestions((prevAnsweredQuestions) => {
      if (!prevAnsweredQuestions.includes(currentQuestionIndex)) {
        return [...prevAnsweredQuestions, currentQuestionIndex];
      }
      return prevAnsweredQuestions;
    });
  };
  // const handleClearOption = (prevAnsweredQuestions) => {
  //   setAnsweredQuestions("");
  // };
  const currentQuestion = questions[currentQuestionIndex];

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div>No questions available</div>;
  }

  return (
    <div className="question-container">
      <div className="question-content">
        <div className="current-question">
          <p>
            Question {currentQuestionIndex + 1}:{" "}
            {currentQuestion.Question.question.above}
          </p>
          <p>
            <input
              type="radio"
              name="option"
              value="option1"
              onClick={handleOptionSelect}
            />
            {currentQuestion.Question.option1}
          </p>
          <p>
            <input
              type="radio"
              name="option"
              value="option2"
              onClick={handleOptionSelect}
            />
            {currentQuestion.Question.option2}
          </p>
          <p>
            <input
              type="radio"
              name="option"
              value="option3"
              onClick={handleOptionSelect}
            />
            {currentQuestion.Question.option3}
          </p>
          <p>
            <input
              type="radio"
              name="option"
              value="option4"
              onClick={handleOptionSelect}
            />
            {currentQuestion.Question.option4}
          </p>
        </div>

        <div className="question-buttons">
          <button onClick={Bhav}>Mark for review</button>
          <button onClick={handleNextQuestion}>Save & Next</button>
        
        </div>
      </div>

      <div className="question-numbers">
        
        {questions.map((_,index) => (
          <div
            key={index}
            className={`question-number ${
              index === currentQuestionIndex ? "active" : ""
            } ${answeredQuestions.includes(index) ? "answered" : ""}`}
            onClick={() => handleQuestionClick(index)}
>
{index + 1}
</div>
))}
</div>
{/* <Link to="finish"> <button style={{'background-color':'blue'}}>FinishExam</button></Link> 
      */}

</div>
);
};
export default Question;

