import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/src_sounds_play.mp3";

function Timer(props) {
  const [timer, setTimer] = useState(30);
  const [startPlay] = useSound(play);

  const { setStop } = props;
  console.log(setStop);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
    startPlay();
  }, [props.questionNumber, startPlay]);

  return timer;
}

export default Timer;
