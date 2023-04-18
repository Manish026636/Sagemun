import React from 'react'
import {Link} from "react-router-dom"

const MCAUSTopics = () => {
  return (
    <div>
    <div className=' mt-10 lg:mt-0 rounded-xl '>

    <h1 className='text-center text-blue-400 text-3xl mb-10 font-bold'>Proposed Topics</h1>
    <div className='grid  p-2 lg:grid-cols-2 gap-4'>

        <div className=' w-full rounded-xl  lg:h-[20vh]'>
            <div class=" flex items-center bg-white border-4 border-gray-200  justify-between p-4  rounded-2xl shadow-indigo-50 s">
                <div>
                    <h2 class="text-gray-900 text-lg font-bold">
                        South China Sea Debate
                    </h2>
                    <h4 class="mt-6 text-md lg:text-lg font-bold text-gray-500 text-left">
                        Country : India
                    </h4>
                    <h3 class="  lg:text-lg font-bold text-yellow-500 text-left">
                        Total time : 20 min
                    </h3>
                    <p class="lg:text-[16px] mb-4 text-xs font-semibold text-gray-400">
                        Per Speaker Time : 2 min
                    </p>
                    <Link to="/VoteTest"><button class="text-sm mr-1 mt-2 px-4 py-2 bg-blue-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                        Vote
                    </button></Link>
                    <button class="text-sm mr-1  px-4 py-2 bg-green-500 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                        Pass
                    </button>
                    <button class="text-sm lg:mt-0 mt-2 px-4 py-2 bg-red-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                        Fail
                    </button>
                </div>
                <div className="bg-white overflow-hidden w-16 h-16 lg:w-20 lg:h-20 md:w-16 md:h-16 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
                    <div>
                        <img
                            src="india.png"
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-full rounded-xl  lg:h-[20vh]'>
            <div class=" flex items-center bg-white border-4 border-gray-200  justify-between p-4  rounded-2xl shadow-indigo-50 s">
                <div>
                    <h2 class="text-gray-900 text-lg font-bold">
                        South China Sea Debate
                    </h2>
                    <h4 class="mt-6 text-md lg:text-lg font-bold text-gray-500 text-left">
                        Country : Russia
                    </h4>
                    <h3 class="  lg:text-lg font-bold text-yellow-500 text-left">
                        Total time : 20 min
                    </h3>
                    <p class="lg:text-[16px] mb-4 text-xs font-semibold text-gray-400">
                        Per Speaker Time : 2 min
                    </p>
                    <button class="text-sm mr-1 mt-2 px-4 py-2 bg-blue-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                        Vote
                    </button>
                    <button class="text-sm mr-1  px-4 py-2 bg-green-500 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                        Pass
                    </button>
                    <button class="text-sm lg:mt-0 mt-2 px-4 py-2 bg-red-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                        Fail
                    </button>
                </div>
                <div className="bg-white overflow-hidden w-16 h-16 lg:w-20 lg:h-20 md:w-16 md:h-16 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
                    <div>
                        <img
                            src="russia.png"
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default MCAUSTopics
