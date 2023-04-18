import React from "react";
function MotionQues() {
 

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-xl  w-full  sm:max-w-lg sm:w-full">
        <div className="bg-blue-500 text-center px-4 py-2 text-white md:text-lg lg:text-lg font-bold">
          Do you have any motions on the floor ?
        </div>
        <div className="p-4">
          {/* Input Box */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="input-box"
            >
              Topic Name
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="input-box"
              type="text"
              placeholder="Input placeholder"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="input-box"
            >
              Total Speaking Time
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="input-box"
              type="number"
              placeholder="Input placeholder"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="input-box"
            >
              Per Speaker Speaking Time
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="input-box"
              type="number"
              placeholder="Input placeholder"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="input-box"
            >
              Submitting Country
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="input-box"
              type="text"
              placeholder="Input placeholder"
            />
          </div>
          {/* Textarea */}

          {/* React Rating Stars Component */}

          {/* Buttons */}
          <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MotionQues;
