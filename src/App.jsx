import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // evry second it will run
    return () => clearInterval(timer); // cleanup function to clear the interval
  },[]); //dependency array is empty, so it runs only once when the component mounts


  const formatHour = (time) => {
    return time === 0 ? 12 : time > 12 ? time - 12 : time;
  };

  const formatTimeWithLeadingZero = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-SL', options);
  }

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">{formatTimeWithLeadingZero(formatHour(currentTime.getHours())) + ' '}
          : 
          {' '+ formatTimeWithLeadingZero(currentTime.getMinutes()) + ' '}
          :
          {' ' + formatTimeWithLeadingZero(currentTime.getSeconds())} 
          {' ' + currentTime.getHours() >= 12 ? 'PM' : ' AM'}
        </div>
        <div className="date">{' ' + formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
