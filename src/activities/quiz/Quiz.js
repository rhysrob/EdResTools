import React, { useState, useEffect } from "react";

const Quiz = ({ data }) => {
  const [idx, setIdx] = useState(0);
  const [questionData, setQuestionData] = useState(data[idx]);

  useEffect(() => {
    setQuestionData(data[idx]);
  }, [idx, questionData, data]);
  return (
    <React.Fragment>
      <h1>{questionData.question}</h1>
      {questionData.choices.map((item, idx) => (
        <button key={idx}>{item.choice}</button>
      ))}

      <div />
      <br />

      <button
        onClick={() => {
          setIdx(idx + 1);
        }}
      >
        Next question
      </button>
    </React.Fragment>
  );
};

export default Quiz;
