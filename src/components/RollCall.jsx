import React from 'react'

const RollCall = () => {
  return (
    <div>
    <div className="bg-white border-2  border-gray-200 rounded-3xl shadow-md p-6 w-full md:h-[25vh]  lg:h-[20vh]">
    <h2 className="text-lg md:text-2xl text font-medium mb-4">
      Roll Call Result
    </h2>
    <div class="grid  mt-10 md:mt-10 lg:mt-16 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
      <button class="bg-red-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-xl lg:text-xl ">
        Absent : 2
      </button>
      <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-xl  ">
        Present : 14
      </button>
      <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-xl  ">
        P&V :{" "}
      </button>
    </div>
  </div>
    </div>
  )
}

export default RollCall
