import { useState } from "react";

const Motions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <button
        className="bg-indigo-500 hover:bg-blue-700 text-white font-bold  py-2 px-1 md:px-4 lg:px-4 rounded-lg"
        onClick={toggleModal}
      >
        Motions
      </button>

      {/* Dark overlay */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={toggleModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all w-full  sm:max-w-lg sm:w-full">
              <div className="bg-blue-500 px-4 py-2 text-white font-bold">
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
                  <button
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded "
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Motions;
