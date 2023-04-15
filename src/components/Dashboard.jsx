import React, { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(1);

  return (
    <div>
      <div class="absolute w-full bg-[#f5f8fe] rounded-b-3xl dark:hidden h-80">
        <div className="flex flex-col lg:flex-row h-screen">
          {/* Sidebar */}
          <div
            className={`fixed lg:static top-0 left-0 h-screen lg:h-auto bg-gray-800 w-full lg:w-64 flex-shrink-0 transform transition-transform duration-400 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } ${sidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"}`}
          >
            {/* Sidebar content */}
            <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
              <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
                <div class="flex items-center justify-center h-14 border-b">
                  <h1 className="font-bold text-blue-400">AIMUN x MUNITY</h1>
                </div>
                <div class="overflow-y-auto overflow-x-hidden flex-grow">
                  <ul class="flex flex-col py-4 space-y-1">
                    <li class="px-5">
                      <div class="flex flex-row items-center h-8">
                        <div class="text-sm font-light tracking-wide text-gray-500">
                          Menu
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-2 text-sm font-bold tracking-wide truncate">
                         GSL
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-2 text-sm font-bold tracking-wide truncate">
                          MOD COCUS
                        </span>
                        
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-2 text-sm font-bold tracking-wide truncate">
                          UNMOD COCUS
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-2 text-sm font-bold tracking-wide truncate">
                        ROLL CALL
                        </span>
                       
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 lg:p-8">
            {/* Top four cards */}
            <div className="grid grid-cols-1 justify-center mt-10 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-3xl shadow-md p-6">
                <h2 className="text-lg font-medium mb-4">Card 1</h2>
                <p className="text-gray-600">Card content goes here.</p>
              </div>
              <div className="bg-white rounded-3xl shadow-md p-6">
                <h2 className="text-lg font-medium mb-4">Card 2</h2>
                <p className="text-gray-600">Card content goes here.</p>
              </div>
              <div className="bg-white rounded-3xl shadow-md p-6">
                <h2 className="text-lg font-medium mb-4">Card 3</h2>
                <p className="text-gray-600">Card content goes here.</p>
              </div>
              <div className="bg-white rounded-3xl shadow-md p-6">
                <h2 className="text-lg font-medium mb-4">Card 4</h2>
                <p className="text-gray-600">Card content goes here.</p>
              </div>
            </div>

            {/* Two big cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-3xl shadow-md p-6 w-full  h-[30vh]">
                <h2 className="text-lg font-medium mb-4">Card 5</h2>
                <p className="text-gray-600">Card content goes here.</p>
              </div>
              <div className="bg-white rounded-3xl shadow-md p-6 w-full  h-[30vh]">
                <h2 className="text-lg font-medium mb-4">Card 6</h2>
                <p className="text-gray-600">Card content goes here.</p>
              </div>
            </div>

            {/* Third div */}
            <div className="bg-gray-500 rounded-3xl shadow-md p-6 w-full lg:w-1/2 h-[50vh]">
              <h2 className="text-lg font-medium mb-4">Card 7</h2>
              <p className="text-gray-600">Card content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
