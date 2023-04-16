import React from 'react'

const SessionInfo = () => {
  return (
    <div>
      <div className="container mt-6 mx-auto p-2 grid grid-cols-2  justify-center  md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border-2 border-gray-300 rounded-3xl text-center shadow-md p-2">
          <p className=" mb-4 text-lg">Committee Name</p>
          <h1 className="text-gray-600 text-2xl font-bold">UNGA</h1>
        </div>
        <div className="bg-white border-2 border-gray-300 rounded-3xl text-center shadow-md p-2">
          <p className=" mb-4 text-lg">Session Topic</p>
          <h1 className="text-gray-600 text-2xl font-bold">Terrorism</h1>
        </div>
        <div className="bg-white border-2 border-gray-300 rounded-3xl text-center shadow-md p-2">
          <p className=" mb-4 text-lg">Session ID</p>
          <h1 className="text-gray-600 text-2xl font-bold">#636</h1>
        </div>
        <div className="bg-white border-2 border-gray-300 rounded-3xl text-center shadow-md p-2">
          <p className=" mb-4 text-lg">Terminate Session</p>
          <button class="bg-red-600 hover:bg-[#9ea9ba] text-white font-bold rounded-xl px-10 py-2 text-sm md:text-lg lg:text-lg ">
            END
          </button>
        </div>
      </div>
    </div>
  )
}

export default SessionInfo
