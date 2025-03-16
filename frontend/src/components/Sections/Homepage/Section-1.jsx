import React from 'react';

const Section_1 = () => {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center h-screen">
          <div className="flex space-x-14">
              <img src="/img/produktbilde-1.png" className="h-20 sm:h-28 md:h-30 lg:h-32 rotate-[22deg]" />
              <div className="flex flex-col space-y-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:3xl font-bold">Spesifikasjoner</h1>
                  <p>blalnlk</p>
              </div>
          </div>

          <button className="mt-28 rounded-md w-36 h-12 bg-sky-900 text-white">Kjøp nå</button>
      </div>
    </>
  );
};

export default Section_1;