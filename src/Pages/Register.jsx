import React from 'react';
import { FaHeart } from 'react-icons/fa';

const RegistrationClosed = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 text-center">
      <h1 className="text-4xl font-extrabold text-red-500 mb-4 tracking-wide">
        REGISTRATIONS CLOSED
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-xl">
        We've hit maximum capacity!   
        <br />
        Thank you for the **overwhelming response**, passion, and love you've shown.  
        <br className="hidden md:block" />
        Your energy has already made this event unforgettable.
      </p>

      <div className="flex items-center gap-2 mt-6 text-pink-400 text-lg">
        <FaHeart className="animate-pulse" />
        <span>With gratitude,  
        <span className="text-white font-semibold"> Team MATRIX</span></span>
      </div>

      <div className="mt-10">
        <p className="text-sm text-gray-400">
          Missed it?  
          <br />
          Follow us for upcoming events, challenges & workshops!
        </p>
      </div>
    </section>
  );
};

export default RegistrationClosed;
