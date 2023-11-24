import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './styles/style.css';


function Timer(props) {
  const [seconds, setSeconds] = useState({basic:0,formatted:0});
  const [minutes, setMinutes] = useState({basic:0,formatted:0});
  const [hours, setHours] = useState({basic:0,formatted:0});

  const navigate = useNavigate();

  const handleEnd = () => {
    navigate("/leaderboard", { state: { hours, minutes, seconds } }); // Change the route to "/Leaderboard" when the button is clicked
  };

  const startTimeRef = useRef(Date.now());
  const intervalRef = useRef(null);

  function getTime() {
    const time = Date.now() - startTimeRef.current;

    let newSeconds = Math.floor(time / 1000) % 60;
    let newMinutes = Math.floor(time / (1000 * 60)) % 60;
    let newHours = Math.floor(time / (1000 * 60 * 60));
    let newSecondsFormatted = newSeconds;
    let newMinutesFormatted = newMinutes;
    let newHoursFormatted = newHours;

    if (newSeconds < 10) {
      newSecondsFormatted = `0${newSeconds}`;
    }

    if (newMinutes < 10) {
      newMinutesFormatted = `0${newMinutes}`;
    }

    if (newHours < 10) {
      newHoursFormatted = `0${newHours}`;
    }

    setSeconds({basic:newSeconds,formatted:newSecondsFormatted});
    setMinutes({basic:newMinutes,formatted:newMinutesFormatted});
    setHours({basic:newHours,formatted:newHoursFormatted});
  }

  useEffect(() => {
    intervalRef.current = setInterval(getTime, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (props.success) {
      clearInterval(intervalRef.current);
      handleEnd();
    }
  }, [props.success]);



  return (
    <div>
      {hours.formatted}:{minutes.formatted}:{seconds.formatted}
    </div>
  );
}

export default Timer;
