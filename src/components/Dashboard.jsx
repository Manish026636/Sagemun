import React from "react";
import { useState } from "react";

const Dashboard = () => {
  const data = [
    { id: 1, flag: <img className="border-2 rounded-xl border-gray-300" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAGFBMVEX////VKx4AOab2+f0AN6UEOaPOKxwFPKiWjACKAAAA+UlEQVR4nO3QsQGDAAzAsFCg/P8xezyxSydoBgAAAAAAAAAAAAAAAAAAAOCjk20etrnY5sfmpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aTmZps/2xxsTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTmpFw4O1+wE1Ff8AAAAAElFTkSuQmCC" alt="USA flag" />, name: "Akash Yadav", action: "Start" },
    { id: 2, flag: <img className="border-2 rounded-xl border-gray-300" src="data:image/jpeg;base64,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" alt="UK flag" />, name: "Harsh Kumar", action: "Start" },
    { id: 3, flag: <img className="border-2 rounded-xl border-gray-300" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg==" alt="Australia flag" />, name: "Manish Yadav", action: "Start" },
    { id: 4, flag: <img className="border-2 rounded-xl border-gray-300" src="data:image/png;base64,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" alt="Canada flag" />, name: "Juniper", action: "Start" },
    { id: 4, flag: <img className="border-2 rounded-xl border-gray-300" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAARVBMVEX///8AJlPOEScAJlQAFFEAKE0BJVZ2hpjOEiXPAB3TgYTQDyno6OjQECf//f/q6OoGK1gAG1ZsfZDq8O/r7ujPd3vNEyqjTlYkAAABTUlEQVR4nO3TSQ7CMBREQeMwJCTEme9/VCBrtl/IUr0jlLrTNF0iau63eVnLEFPZ9q49ckx9ChE5Ta6PFNWYnl2OMjnqNWmDSHKu2MR3fpi8gqrYpA8iqXQn6TTxHSZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyb/NWkCTcYgkfFjko8gk5ymEJKvybysZYipbHvXRpn0bznrALRzpDS4AAAAAElFTkSuQmCC" alt="Canada flag" />, name: "Charlie", action: "Start" },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full  lg:w-1/2 bg-blue-100 mt-4 p-4 mb-4  rounded-xl">
          <div className="flex justify-center items-center ">
            <ul className="flex">
              <li
                className={`mr-4 md:mr-8 cursor-pointer py-4 px-4 lg:px-8 rounded-md ${
                  activeTab === 1
                    ? "bg-blue-500 text-white"
                    : " bg-white text-gray-800"
                }`}
                onClick={() => handleTabChange(1)}
              >
                GSL
              </li>
              <li
                className={`mr-4 md:mr-8 cursor-pointer py-4 px-4 lg:px-8 rounded-md ${
                  activeTab === 2
                    ? "bg-blue-500 text-white"
                    : " bg-white text-gray-800"
                }`}
                onClick={() => handleTabChange(2)}
              >
                MD
              </li>
              <li
                className={`mr-4 md:mr-8 cursor-pointer py-4 px-4 lg:px-8 rounded-md ${
                  activeTab === 3
                    ? "bg-blue-500 text-white"
                    : " bg-white text-gray-800"
                }`}
                onClick={() => handleTabChange(3)}
              >
                UNMD
              </li>
              <li
                className={`cursor-pointer py-4 px-4  lg:px-8 rounded-md ${
                  activeTab === 4
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
      <div class="absolute w-full bg-[#f5f8fe] rounded-b-3xl dark:hidden h-96">
        <div className="flex flex-col lg:flex-row h-screen">
          {/* Sidebar */}

          {/* Main content */}
          <div className="flex-1 p-4 lg:p-8">
            {/* Top four cards */}
            <div className="grid grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-3xl text-center shadow-md p-2">
                <p className=" mb-4 text-lg">Committee Name</p>
                <h1 className="text-gray-600 text-2xl font-bold">UNGA</h1>
              </div>
              <div className="bg-white rounded-3xl text-center shadow-md p-2">
                <p className=" mb-4 text-lg">Session Topic</p>
                <h1 className="text-gray-600 text-2xl font-bold">Terrorism</h1>
              </div>
              <div className="bg-white rounded-3xl text-center shadow-md p-2">
                <p className=" mb-4 text-lg">Session ID</p>
                <h1 className="text-gray-600 text-2xl font-bold">#636</h1>
              </div>
              <div className="bg-white rounded-3xl text-center shadow-md p-2">
                <p className=" mb-4 text-lg">Terminate Session</p>
                <button class="bg-red-600 hover:bg-[#9ea9ba] text-white font-bold rounded-xl px-10 py-2 text-sm md:text-lg lg:text-lg ">
                  END
                </button>
              </div>
            </div>

            {/* Two big cards */}
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mb-8">
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
              <div className="bg-white border-2  border-gray-200 rounded-3xl shadow-md p-6 w-full  h-[30vh]">
                <h2 className="text-lg md:text-2xl text font-medium mb-4">
                  Roll Call Result
                </h2>
                <div class="grid  mt-10 md:mt-10 lg:mt-16 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <button class="bg-red-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-xl lg:text-2xl ">
                    Absent : 2
                  </button>
                  <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-2xl  ">
                    Present : 14
                  </button>
                  <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-2xl  ">
                    P&V :{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* Third div */}

            <center>
              <div className=" mt-16 container mx-auto">
                <div className="bg-gray-400 h-20 rounded-xl w-full md:w-1/2">
                  <h2 className="text-3xl text-white font-medium py-5 mb-4">
                    Delegates
                  </h2>
                </div>
                <div className=" mt-6 overflow-x-auto rounded-2xl border">
                  <div className="table-container overflow-y-auto h-auto">
                    <table className="text-center table-auto w-full">
                      <thead className="sticky top-0 bg-gray-200 text-gray-800">
                        <tr>
                          <th className="px-2 py-2">ID</th>
                          <th className="px-2 py-2">Country</th>
                          <th className="px-2 py-2">Name</th>
                          <th className="px-2 py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td className="border font-medium lg:text-xl  py-2">
                              {item.id}
                            </td>
                            <td className="border rounded-lg  p-2 w-10 h-10  py-2">{item.flag}</td>
                            <td className="border font-medium lg:text-xl py-2">
                              {item.name}
                            </td>
                            <td className="border  py-2">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                                {item.action}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
