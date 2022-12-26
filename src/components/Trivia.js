import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../assets/src_sounds_correct.mp3";
import wrong from "../assets/src_sounds_wrong.mp3";

function Trivia(props) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    setQuestion(props.data[props.questionNumber - 1]);
  }, [props.data, props.questionNumber]);

  // useEffect(() => {
  //   console.log("letsplay working");
  //   letsPlay();
  // }, [letsPlay]);

  function delay(duration, callback) {
    setTimeout(() => {
      callback();
    }, duration);
  }

  function clickHandler(a) {
    setSelectedAnswer(a);
    setClassName("answer active");

    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          props.setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          props.setStop(true);
        });
      }
    });
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => clickHandler(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
