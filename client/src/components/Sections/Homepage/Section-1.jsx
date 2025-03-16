import React from 'react';

const Section_1 = () => {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center h-screen">
          <div className="flex items-center">
              <button className="mr-10 rounded-full w-10 h-10 text-black hover:text-gray-700 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
              </button>
              <div className="flex space-x-14">
                  <img src="/img/produktbilde-1.png" alt="Filterspyler product" className="h-20 sm:h-28 md:h-30 lg:h-32 rotate-[22deg]" />
                  <div className="flex flex-col space-y-4">
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:3xl font-bold">Spesifikasjoner</h1>
                      <p>Materiale: Høyverdig stål</p>
                      <p>Dimensjoner: 42mm lang, 22mm i diameter</p>
                      <p>Vekt: 70g</p>
                  </div>
              </div>
              <button className="ml-10 rounded-full w-10 h-10 text-black hover:text-gray-700 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
              </button>
          </div>

          <button className="mt-28 rounded-md w-36 h-12 bg-sky-900 text-white">Kjøp nå</button>
      </div>
    </>
  );
};

export default Section_1;