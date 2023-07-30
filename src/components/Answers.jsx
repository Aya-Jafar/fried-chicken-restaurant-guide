import React, { useState } from "react";

function Answers() {
  const initial = [
    { meaning: "no meaning", isTrue: true },
    { meaning: "to live fulfully", isTrue: false },
    { meaning: "to help others", isTrue: false },
  ];

//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);


  const changeStatus = (e, answer) => {
    if (answer.isTrue) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
    }
  };

  return (
    <>
      {initial.map((answer, index) => {
        return (
          <div
            key={index}
            className="answer"
            onClick={(e) => {
              changeStatus(e, answer);
            }}
          >
            <h1>{answer.meaning}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Answers;
