import { useRef, useState } from 'react';

function TimerUseRef() {
  const [timer, setTimer] = useState(0);
  const interval = useRef<null | NodeJS.Timeout>(null);

  const startHandler = () => {
    if (interval.current) return;
    interval.current = setInterval(() => setTimer(t => t + 1), 1000);
  }

  const pauseHandler = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }

  const stopHandler = () => {
    pauseHandler();
    setTimer(0);
  }

  return (
    <div>
      <div>
        timer: {timer}s
      </div>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={stopHandler}>Stop</button>
    </div>
  )
}

export default TimerUseRef;
