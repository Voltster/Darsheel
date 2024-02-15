import  { useState, useEffect } from 'react';

const SlideInForm = () => {
  // State to control form visibility
  const [isVisible, setIsVisible] = useState(false);

  // Dummy user information (replace with actual data)
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
  });

  // Handler to toggle form visibility
  const toggleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Effect to simulate slide-in form after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000); // 15 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-0 right-2 mb-8 mr-8 z-50 ">
      {/* Button to toggle form visibility */}
      {!isVisible && (
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
          onClick={toggleFormVisibility}
        >
          Open Form
        </button>
      )}
      {/* Slide-in form */}
      {isVisible && (
        <div className="fixed bottom-0 right-4 border border-gray-400 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-md">
          {/* Close button */}
          <button
            className="absolute   top-2 right-2 scale-150 text-gray-600 hover:text-gray-800"
            onClick={toggleFormVisibility}
          >
            &times;
          </button>
          {/* Form fields */}
          <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Us</h3>
          <form>
            {/* Name field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder={userInfo.name}
               
              />
            </div>
            {/* Email field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder={userInfo.email}
                
              />
            </div>
            {/* Phone field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder={userInfo.phone}
                
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SlideInForm;
