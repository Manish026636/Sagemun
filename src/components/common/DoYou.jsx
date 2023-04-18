import React from "react";
import MotionQues from "../MCAUS/MotionQues";

const DoYou = () => {
    return (
        <>
            <div className="flex mt-10 justify-center items-center ">
                <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-1 lg:mt-16">
                        {/* Content for the first column */}
                        <MotionQues  />
                    </div>
                    <div className="p-1">
                        <div className="bg-[#eaf1fc] rounded-2xl h-16 mb-10">
                        <h1 className="text-center text-gray-500 font-bold text-xl py-[15px] lg:text-2xl ">Proposed Topics for Discussion  </h1>

                        </div>
                        <div className=" grid  grid-cols-1 sm:grid-cols-2 w-full gap-6">
                            <div class=" flex items-center border-4 border-gray-200  justify-between p-4  rounded-3xl bg-white shadow-indigo-50 shadow-md">
                                <div className="w-full">
                                    <h2 class="text-gray-900 text-lg font-bold">
                                        Topic Name here
                                    </h2>
                                    <h2 class="mt-2 text-gray-400 text-lg font-bold">
                                        Country : INDIA
                                    </h2>
                                    <h3 class="  lg:text-xl font-bold text-indigo-400 text-left">
                                        Total time : 20 min
                                    </h3>
                                    <p class="lg:text-sm text-xs font-semibold text-gray-400">
                                        Per Speaker Time : 2 min
                                    </p>
                                    <button class="text-sm mr-1 mt-6 px-4 py-2 bg-blue-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Vote
                                    </button>
                                    <button class="text-sm mr-1  px-4 py-2 bg-green-600 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Pass
                                    </button>
                                    <button class="text-sm  px-4 py-2 bg-red-500 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Fail
                                    </button>
                                </div>
                                <div className="bg-white overflow-hidden  w-26 h-24 lg:w-32 lg:h-24 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
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
                            <div class=" flex items-center border-4 border-gray-200  justify-between p-4  rounded-3xl bg-white shadow-indigo-50 shadow-md">
                                <div className="w-full">
                                    <h2 class="text-gray-900 text-lg font-bold">
                                        Topic Name here
                                    </h2>
                                    <h2 class="mt-2 text-gray-400 text-lg font-bold">
                                        Country : RUSSIA
                                    </h2>
                                    <h3 class="  lg:text-xl font-bold text-indigo-400 text-left">
                                        Total time : 20 min
                                    </h3>
                                    <p class="lg:text-sm text-xs font-semibold text-gray-400">
                                        Per Speaker Time : 2 min
                                    </p>
                                    <button class="text-sm mr-1 mt-6 px-4 py-2 bg-blue-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Vote
                                    </button>
                                    <button class="text-sm mr-1  px-4 py-2 bg-green-600 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Pass
                                    </button>
                                    <button class="text-sm  px-4 py-2 bg-red-500 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Fail
                                    </button>
                                </div>
                                <div className="bg-white overflow-hidden  w-26 h-24 lg:w-32 lg:h-24 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
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
                            <div class=" flex items-center border-4 border-gray-200  justify-between p-4  rounded-3xl bg-white shadow-indigo-50 shadow-md">
                                <div className="w-full">
                                    <h2 class="text-gray-900 text-lg font-bold">
                                        Topic Name here
                                    </h2>
                                    <h2 class="mt-2 text-gray-400 text-lg font-bold">
                                        Country : USA
                                    </h2>
                                    <h3 class="  lg:text-xl font-bold text-indigo-400 text-left">
                                        Total time : 20 min
                                    </h3>
                                    <p class="lg:text-sm text-xs font-semibold text-gray-400">
                                        Per Speaker Time : 2 min
                                    </p>
                                    <button class="text-sm mr-1 mt-6 px-4 py-2 bg-blue-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Vote
                                    </button>
                                    <button class="text-sm mr-1  px-4 py-2 bg-green-600 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Pass
                                    </button>
                                    <button class="text-sm  px-4 py-2 bg-red-500 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Fail
                                    </button>
                                </div>
                                <div className="bg-white overflow-hidden   w-26 h-24 lg:w-32 lg:h-24 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
                                    <div>
                                        <img
                                            src="usa.jpeg"
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
                            <div class=" flex items-center border-4 border-gray-200  justify-between p-4  rounded-3xl bg-white shadow-indigo-50 shadow-md">
                                <div className="w-full">
                                    <h2 class="text-gray-900 text-lg font-bold">
                                        Topic Name here
                                    </h2>
                                    <h2 class="mt-2 text-gray-400 text-lg font-bold">
                                        Country : FRANCE
                                    </h2>
                                    <h3 class="  lg:text-xl font-bold text-indigo-400 text-left">
                                        Total time : 20 min
                                    </h3>
                                    <p class="lg:text-sm text-xs font-semibold text-gray-400">
                                        Per Speaker Time : 2 min
                                    </p>
                                    <button class="text-sm mr-1 mt-6 px-4 py-2 bg-blue-400  font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Vote
                                    </button>
                                    <button class="text-sm mr-1  px-4 py-2 bg-green-600 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Pass
                                    </button>
                                    <button class="text-sm  px-4 py-2 bg-red-500 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                        Fail
                                    </button>
                                </div>
                                <div className="bg-white overflow-hidden   w-26 h-24 lg:w-32 lg:h-24 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
                                    <div>
                                        <img
                                            src="france.png"
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
        </>
    );
};

export default DoYou;
