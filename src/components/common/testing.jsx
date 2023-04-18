import React from "react";
import MotionQues from "../MCAUS/MotionQues";

const DoYou = () => {
    return (
        <>
            <div class="flex flex-wrap gap-6 p-4  justify-center">
                <MotionQues />

                <div className="grid grid-cols-1 sm-w-full md:w-full lg:w-2/3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
                    <section class="text-gray-600 body-font rounded-3xl bg-gray-50   flex justify-center items-center">
                        <div class="container px-5 mt-4 mb-4 mx-auto">
                            <div class="flex flex-wrap -m-4 text-center">
                                <div class="p-1 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                                    <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                        <div>
                                            <h2 class="text-gray-900 text-lg font-bold">
                                                Topic Name here
                                            </h2>
                                            <h3 class="mt-2  lg:text-xl font-bold text-yellow-500 text-left">
                                                Total time : 20 min
                                            </h3>
                                            <p class="lg:text-sm text-xs font-semibold text-gray-400">
                                                Per Speaker Time : 2 min
                                            </p>
                                            <button class="text-sm mr-1 mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                                Vote
                                            </button>
                                            <button class="text-sm mr-1  px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                                Pass
                                            </button>
                                            <button class="text-sm  px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                                Fail
                                            </button>
                                        </div>
                                        <div className="bg-white overflow-hidden w-32 h-32 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
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
                                <div class="p-1 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                                    <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                        <div>
                                            <h2 class="text-gray-900 text-lg font-bold">
                                                Topic Name here
                                            </h2>
                                            <h3 class="mt-2  lg:text-xl font-bold text-yellow-500 text-left">
                                                Total time : 20 min
                                            </h3>
                                            <p class="lg:text-sm text-xs font-semibold text-gray-400">
                                                Per Speaker Time : 2 min
                                            </p>
                                            <button class="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                                Vote
                                            </button>
                                        </div>
                                        <div className="bg-white overflow-hidden w-32 h-32 rounded-full shadow-2xl border border-gray-200  flex justify-center ">
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
                                <div class="p-1 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                                    <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                        <div>
                                            <h2 class="text-gray-900 text-lg font-bold">
                                                Topic Name here
                                            </h2>
                                            <h3 class="mt-2  lg:text-xl font-bold text-yellow-500 text-left">
                                                Total time : 20 min
                                            </h3>
                                            <p class="lg:text-sm text-xs font-semibold text-gray-400">
                                                Per Speaker Time : 2 min
                                            </p>
                                            <button class="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                                                Vote
                                            </button>
                                        </div>
                                        <div className="bg-white overflow-hidden w-32 h-32 rounded-full shadow-2xl border border-gray-200 flex justify-center ">
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
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default DoYou;
