import React from 'react'

const TimerSection = () => {
  return (
    <div>
    <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-md p-6 w-full  h-auto">
    <div className="bg-[#F4F6F9] rounded-3xl p-6 w-full h-30">
      <h4 className="text-center text-xl md:text-3xl  font-bold">
        20:00 / 20:00
      </h4>
      <h1 className="text-center text-3xl md:text-5xl  font-bold">
        1:00 / 1:00
      </h1>
    </div>

    <div className=" mt-2 rounded-3xl p-2  w-full h-auto ">
      <div class="grid mt-4 md:mt-6 lg:mt-6 grid-cols-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg ">
          Yield
        </button>
        <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg  ">
          Set Time
        </button>
        <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg  ">
          Reest
        </button>
        <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg  ">
          Play
        </button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default TimerSection
