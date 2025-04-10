import React, { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

const Timer = () => {
  const { secondsRemaining, dispatch } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(intervalID);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
};

export default Timer;
