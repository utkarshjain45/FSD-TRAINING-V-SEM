import React, { useState } from 'react';
import ReactLogo from '../assets/react.svg';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-8 font-sans">
      <div className="flex justify-around items-center mb-8">
        <div className="flex items-center">
          <img src={ReactLogo} className="w-12 h-12" alt="React logo" />
        </div>
        <h1 className="text-4xl text-blue-500 text-right">React Tutorial</h1>
      </div>

      <div className="flex justify-between mb-8">
        <div className="w-1/2">
          <h2 className="text-2xl text-gray-800">About Node.js with Vite</h2>
          <p className="text-lg text-gray-600 mt-2">
            Node.js is a powerful runtime for building server-side applications with JavaScript.
            Vite is a modern build tool that significantly improves the development experience for frontend projects.
            Together, they provide a fast and efficient environment for full-stack JavaScript development.
          </p>
        </div>

        {/* Right Section - Counter Button */}
        <div className="w-1/3 flex justify-center items-center">
          <button
            onClick={incrementCount}
            className="bg-blue-500 text-white px-6 py-3 text-xl rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Click me: {count}
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800">Chapter: Introduction to React</h2>
        <p className="text-lg text-gray-600 mt-2">
          React is a JavaScript library for building user interfaces. It makes it easy to create interactive UIs by 
          efficiently updating and rendering components when your data changes. React uses a virtual DOM to improve performance 
          and ensure a smooth user experience.
        </p>
      </div>
    </div>
  );
};

export default MyComponent;