import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>{`${currentTime.getHours()}:${currentTime.getMinutes() < 10 ? "0" : ""}${currentTime.getMinutes()}`}</span>
  );
};

export default CurrentTime;