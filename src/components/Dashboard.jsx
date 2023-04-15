import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Dashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(0);

    const handleToggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  return (
    <div>
    <div className="flex flex-col lg:flex-row h-screen">
    {/* Sidebar */}
    <div
      className={`fixed lg:static top-0 left-0 h-screen lg:h-auto bg-gray-800 w-full lg:w-64 flex-shrink-0 transform transition-transform duration-400 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } ${sidebarOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full'}`}
    >
      {/* Sidebar content */}
      <div className="flex flex-col h-full py-4 px-4">
        <div className="flex justify-between items-center mb-8">
          {/* Sidebar toggle */}
          <button className="lg:hidden text-white focus:outline-none" onClick={handleToggleSidebar}>
            <FiMenu size={24} />
          </button>
          <h1 className="text-white font-bold text-xl">Admin Dashboard</h1>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Sidebar buttons */}
          <button className="text-lg text-white rounded-lg hover:bg-blue-600 py-2 px-4 font-medium focus:outline-none">
            Dashboard
          </button>
          <button className="text-lg text-white rounded-lg hover:bg-blue-600 py-2 px-4 font-medium focus:outline-none">
            Products
          </button>
          <button className="text-lg text-white rounded-lg hover:bg-blue-600 py-2 px-4 font-medium focus:outline-none">
            Orders
          </button>
          <button className="text-lg text-white rounded-lg hover:bg-blue-600 py-2 px-4 font-medium focus:outline-none">
            Customers
          </button>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="flex-1 p-4 lg:p-8">
      {/* Top four cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-4">Card 1</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-4">Card 2</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-4">Card 3</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-4">Card 4</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </div>
      </div>

      {/* Two big cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-500 h-600">
          <h2 className="text-lg font-medium mb-4">Card 5</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-350 h-600">
          <h2 className="text-lg font-medium mb-4">Card 6</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </div>
      </div>

      {/* Third div */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-500 h-600">
        <h2 className="text-lg font-medium mb-4">Card 7</h2>
        <p className="text-gray-600">Card content goes here.</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard;
