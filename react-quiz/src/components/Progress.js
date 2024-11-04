import React from "react";

const Progress = ({
  numQuestions,
  answer,
  points,
  index,
  maxPossiblePoints,
}) => {
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
