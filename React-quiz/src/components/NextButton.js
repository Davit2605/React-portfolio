import React from "react";
import { useQuiz } from "../context/QuizContext";

const NextButton = () => {
  const { dispatch, answer, numQuestions, index } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};
export default NextButton;
