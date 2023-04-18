import React from "react";
import { useState } from "react";


const VoteTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="bg-indigo-500 hover:bg-blue-700 text-white font-bold  py-2 px-1 md:px-4 lg:px-4 rounded-lg"
        onClick={toggleModal}
      >
        Vote
      </button>

      {/* Dark overlay */}
      {isOpen && (
          <div className="flex items-center justify-center min-h-screen p-4">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={toggleModal}
            >
              <div className="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
                <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          Voting on
                        </p>
                      </div>
                    </div>
                    <div className="shadow-xl border-2 border-gray-300 h-auto  mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10  rounded-2xl sm:py-2">
                      <div className="pt--10 pr-0 pb-10 pl-0">
                        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                              <img
                                src="india.png"
                                alt=""
                                className="flex-shrink-0 border-2 border-gray-300  object-cover rounded-full btn- w-10 h-10"
                              />
                              <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                <p className="text-lg font-bold text-gray-800 truncate">
                                  INDIA
                                </p>
                                <p className="text-gray-600 text-md">
                                  Akash Yadav
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                              <a
                                href="/"
                                className="bg-green-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Favour
                              </a>
                              <a
                                href="/"
                                className="bg-red-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Against
                              </a>
                              <a
                                href="/"
                                className="bg-gray-500 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Abstain
                              </a>
                              
                            </div>
                          </div>
                        </div>
                        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                              <img
                                src="india.png"
                                alt=""
                                className="flex-shrink-0 border-2 border-gray-300  object-cover rounded-full btn- w-10 h-10"
                              />
                              <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                <p className="text-lg font-bold text-gray-800 truncate">
                                  INDIA
                                </p>
                                <p className="text-gray-600 text-md">
                                  Akash Yadav
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                              <a
                                href="/"
                                className="bg-green-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Favour
                              </a>
                              <a
                                href="/"
                                className="bg-red-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Against
                              </a>
                              <a
                                href="/"
                                className="bg-gray-500 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Abstain
                              </a>
                              
                            </div>
                          </div>
                        </div>
                        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                              <img
                                src="india.png"
                                alt=""
                                className="flex-shrink-0 border-2 border-gray-300  object-cover rounded-full btn- w-10 h-10"
                              />
                              <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                <p className="text-lg font-bold text-gray-800 truncate">
                                  INDIA
                                </p>
                                <p className="text-gray-600 text-md">
                                  Akash Yadav
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                              <a
                                href="/"
                                className="bg-green-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Favour
                              </a>
                              <a
                                href="/"
                                className="bg-red-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Against
                              </a>
                              <a
                                href="/"
                                className="bg-gray-500 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Abstain
                              </a>
                              
                            </div>
                          </div>
                        </div>


                        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                              <img
                                src="india.png"
                                alt=""
                                className="flex-shrink-0 border-2 border-gray-300  object-cover rounded-full btn- w-10 h-10"
                              />
                              <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                <p className="text-lg font-bold text-gray-800 truncate">
                                  INDIA
                                </p>
                                <p className="text-gray-600 text-md">
                                  Akash Yadav
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                              <a
                                href="/"
                                className="bg-green-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Favour
                              </a>
                              <a
                                href="/"
                                className="bg-red-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Against
                              </a>
                              <a
                                href="/"
                                className="bg-gray-500 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Abstain
                              </a>
                              
                            </div>
                          </div>
                        </div>
                        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                              <img
                                src="india.png"
                                alt=""
                                className="flex-shrink-0 border-2 border-gray-300  object-cover rounded-full btn- w-10 h-10"
                              />
                              <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                <p className="text-lg font-bold text-gray-800 truncate">
                                  INDIA
                                </p>
                                <p className="text-gray-600 text-md">
                                  Akash Yadav
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                              <a
                                href="/"
                                className="bg-green-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Favour
                              </a>
                              <a
                                href="/"
                                className="bg-red-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Against
                              </a>
                              <a
                                href="/"
                                className="bg-gray-500 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Abstain
                              </a>
                              
                            </div>
                          </div>
                        </div>
                        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                              <img
                                src="india.png"
                                alt=""
                                className="flex-shrink-0 border-2 border-gray-300  object-cover rounded-full btn- w-10 h-10"
                              />
                              <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                <p className="text-lg font-bold text-gray-800 truncate">
                                  INDIA
                                </p>
                                <p className="text-gray-600 text-md">
                                  Akash Yadav
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                              <a
                                href="/"
                                className="bg-green-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Favour
                              </a>
                              <a
                                href="/"
                                className="bg-red-500 mr-2 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Against
                              </a>
                              <a
                                href="/"
                                className="bg-gray-500 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg"
                              >
                                Abstain
                              </a>
                              
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoteTest;
