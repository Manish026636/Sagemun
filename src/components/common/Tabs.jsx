import React from 'react'
import { useState } from "react";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full  lg:w-1/2 bg-indigo-200 mt-4 p-4 mb-4  rounded-xl">
                    <div className="flex justify-center items-center ">
                        <ul className="flex">
                            <li
                                className={`mr-4 md:mr-8 font-bold cursor-pointer py-4 px-4 lg:px-12 rounded-xl ${activeTab === 1
                                    ? "bg-blue-500 text-white"
                                    : " bg-white text-gray-800"
                                    }`}
                                onClick={() => handleTabChange(1)}
                            >
                                GSL
                            </li>
                            <li
                                className={`mr-4 md:mr-8 font-bold cursor-pointer py-4 px-4 lg:px-12 rounded-xl ${activeTab === 2
                                    ? "bg-blue-500 text-white"
                                    : " bg-white text-gray-800"
                                    }`}
                                onClick={() => handleTabChange(2)}
                            >
                                MD
                            </li>
                            <li
                                className={`mr-4 md:mr-8 font-bold cursor-pointer py-4 px-4 lg:px-12 rounded-xl ${activeTab === 3
                                    ? "bg-blue-500 text-white"
                                    : " bg-white text-gray-800"
                                    }`}
                                onClick={() => handleTabChange(3)}
                            >
                                UNMD
                            </li>
                            <li
                                className={`cursor-pointer py-4 px-4 font-bold lg:px-12 rounded-xl ${activeTab === 4
                                    ? "bg-blue-500 text-white"
                                    : " bg-white text-gray-800"
                                    }`}
                                onClick={() => handleTabChange(4)}
                            >
                                RLCL
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs
