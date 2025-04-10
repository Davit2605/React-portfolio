import React from "react";
import { useQuiz } from "../context/QuizContext";

const Progress = () => {
  const { numQuestions, answer, points, index, maxPossiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
