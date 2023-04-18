import React from 'react'
import {Link} from "react-router-dom"
const RollCall = () => {
  return (
    <div>

      <div className="bg-white border-2  border-gray-200 rounded-3xl shadow-md p-6 w-full md:h-auto  lg:h-auto">
        <h2 className="text-lg md:text-2xl text font-medium mb-2">
          Roll Call Result
        </h2>
        <div className="grid  mt-6 md:mt-10 lg:mt-10 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          <button className="bg-red-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-xl lg:text-xl ">
            Absent : 2
          </button>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-xl  ">
            Present : 14
          </button>
          <button className="bg-indigo-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-xl  ">
            P&V :{" "}
          </button>
        </div>
        <h2 className="mt-6 text-lg md:text-2xl text font-medium ">
         Motions
        </h2>
        <div className="flex  mt-6 md:mt-10 lg:mt-10 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
        </div>
       <Link to="/MotionDashboard"><button className="bg-indigo-700 px-4 hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-md sm:text-sm md:text-lg lg:text-xl  ">
           Take Motion
          </button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default RollCall
