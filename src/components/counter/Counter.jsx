// src/Counter.js

import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-16') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="counter-container">
      <div className="counter-box">
        <span>{timeLeft.days || '0'}</span>
        <div>DAYS</div>
      </div>
      <div className="counter-box">
        <span>{timeLeft.hours || '00'}</span>
        <div>HOURS</div>
      </div>
      <div className="counter-box">
        <span>{timeLeft.minutes || '00'}</span>
        <div>MINUTES</div>
      </div>
      <div className="counter-box">
        <span>{timeLeft.seconds || '00'}</span>
        <div>SECONDS</div>
      </div>
    </div>
  );
};

export default Counter;
