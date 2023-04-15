import React from "react";

const Dashboard = () => {

  return (
    <div>
      <div class="absolute w-full bg-[#f5f8fe] rounded-b-3xl dark:hidden h-96">
        <div className="flex flex-col lg:flex-row h-screen">
          {/* Sidebar */}


          {/* Main content */}
          <div className="flex-1 p-4 lg:p-8">
            {/* Top four cards */}
            <div className="grid grid-cols-1 justify-center mt-10 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-3xl text-center shadow-md p-6">
                <p className=" mb-4 text-lg">Committee Name</p>
                <h1 className="text-gray-600 text-2xl font-bold">UNGA</h1>
              </div>
              <div className="bg-white rounded-3xl text-center shadow-md p-6">
                <p className=" mb-4 text-lg">Session Topic</p>
                <h1 className="text-gray-600 text-2xl font-bold">Terrorism</h1>
              </div>
              <div className="bg-white rounded-3xl text-center shadow-md p-6">
                <p className=" mb-4 text-lg">Session ID</p>
                <h1 className="text-gray-600 text-2xl font-bold">#636</h1>
              </div>
              <div className="bg-white rounded-3xl text-center shadow-md p-6">
                <p className=" mb-4 text-lg">Terminate Session</p>
                <button class="bg-red-600 hover:bg-[#9ea9ba] text-white font-bold rounded-xl px-10 py-2 text-sm md:text-lg lg:text-lg ">END</button>
              </div>
            </div>

            {/* Two big cards */}
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-md p-6 w-full  h-auto">
                <div className="bg-[#F4F6F9] rounded-3xl p-6 w-full h-30">
                  <h4 className="text-center text-xl md:text-3xl  font-bold">20:00 / 20:00</h4>
                  <h1 className="text-center text-3xl md:text-5xl  font-bold">1:00 / 1:00</h1>
                </div>

                <div className=" mt-2 rounded-3xl p-2  w-full h-auto ">
                  <div class="grid mt-4 md:mt-6 lg:mt-6 grid-cols-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg ">Yield</button>
                    <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg  ">Set Time</button>
                    <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg  ">Reest</button>
                    <button class="bg-[#9ea9ba] hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm md:text-lg lg:text-lg  ">Play</button>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2  border-gray-200 rounded-3xl shadow-md p-6 w-full  h-[30vh]">
                <h2 className="text-lg md:text-2xl text font-medium mb-4">Roll Call Result</h2>
                <div class="grid  mt-10 md:mt-10 lg:mt-16 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <button class="bg-red-400 hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm sm:text-sm md:text-lg lg:text-lg ">Absent : 2</button>
                  <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm sm:text-sm md:text-lg lg:text-lg  ">Present : 14</button>
                  <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold rounded-xl py-2 text-sm sm:text-sm md:text-lg lg:text-lg  ">P&V : </button>
                </div>
              </div>
            </div>

            {/* Third div */}
            <div className="b">
              <h2 className="text-lg font-medium mb-4">Card 7</h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stocked
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Apple
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Fruits
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Yes
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Dragonfruit
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Fruits
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Yes
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Passionfruit
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Fruits
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      No
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Spinach
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Vegetables
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;