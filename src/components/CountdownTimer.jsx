import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Initial countdown time: 10 minutes (in seconds)
  const initialTime = 10 * 60;

  // State for countdown time and visibility
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isVisible, setIsVisible] = useState(false);

  // Dummy course data (replace with actual data)
  const course = {
    title: `Time is running out!
     Grab your spot fast`,
    instructor: 'Darsheel Savla',
    duration: '10 hours',
  };

  // Function to format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Effect to toggle visibility every 20 seconds
  useEffect(() => {
    const visibilityTimer = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Show for 5 seconds
    }, 25000); // Every 20 seconds

    // Cleanup function to clear interval
    return () => clearInterval(visibilityTimer);
  }, []);

  // Countdown logic
  useEffect(() => {
    const timer = isVisible && setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div className="relative z-50">
      {/* Popover for countdown timer */}
      {isVisible && (
        <div className="fixed bottom-12 left-2 bg-yellow-500 p-4 rounded-md shadow-md">
          <button
            className="absolute top-0 right-2 text-gray-700 scale-150 hover:text-gray-800"
            onClick={() => setIsVisible(false)}
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h2>
          <p className="text-gray-700 mb-2">Instructor: {course.instructor}</p>
          <p className="text-gray-700 mb-2">Duration: {course.duration}</p>
          <div className="text-2xl mb-4 text-gray-900">
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
