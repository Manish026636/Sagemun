import React from 'react'
import FeedBack from "./FeedBack";

const Table = () => {
    const data = [
        { id: 1, flag: <img className="border-2 rounded-xl border-gray-300" src="india.png" alt="India flag" />,countryName:"India" , name: "Akash Yadav",reserveTime:"10s", action: "Start"},
        { id: 2, flag: <img className="border-2 rounded-xl border-gray-300" src="russia.png" alt="Russia flag" />,countryName:"Russia", name: "Harsh Kumar",reserveTime:"19s", action: "Start"},
        { id: 3, flag: <img className="border-2 rounded-xl border-gray-300" src="usa.jpeg" alt="USA flag" />,countryName:"USA", name: "Manish Yadav",reserveTime:"30s", action: "Start" },
        { id: 4, flag: <img className="border-2 rounded-xl border-gray-300" src="france.png" alt="France flag" />,countryName:"France", name: "Juniper",reserveTime:"24s", action: "Start"},
        { id: 5, flag: <img className="border-2 rounded-xl border-gray-300" src="india.png" alt="India flag" />,countryName:"India", name: "Akash Yadav",reserveTime:"13s", action: "Start"},
        { id: 6, flag: <img className="border-2 rounded-xl border-gray-300" src="russia.png" alt="Russia flag" />,countryName:"Russia", name: "Harsh Kumar",reserveTime:"20s", action: "Start"},
        { id: 7, flag: <img className="border-2 rounded-xl border-gray-300" src="usa.jpeg" alt="USA flag" />,countryName:"USA", name: "Manish Yadav",reserveTime:"32s", action: "Start" },
        { id: 8, flag: <img className="border-2 rounded-xl border-gray-300" src="france.png" alt="France flag" />,countryName:"France", name: "Juniper",reserveTime:"08s", action: "Start"},
        
        

      ];
  return (
    <div className="mt-10 container mx-auto">
      <div className="bg-blue-500 h-20 rounded-xl w-full md:w-1/2">
        <h2 className="text-3xl text-white font-medium py-5 mb-4">
          Delegates
        </h2>
      </div>
      <div className="mt-6 overflow-x-auto rounded-2xl  border">
        <div className="table-container scrollbar-hide overflow-y-auto h-96">
          <table className="text-center  table-auto w-full ">
            <thead className="sticky top-0 bg-gray-200 text-gray-800">
              <tr>
                <th className="px-2  py-2">ID</th>
                <th className="px-2 py-2">Country Flag</th>
                <th className="px-2 py-2">Country Name</th>
                <th className="px-2 py-2">Name</th>
                <th className="px-2 py-2">Reserve Time</th>
                <th className="px-2 py-2">Action</th>
                <th className="px-2 py-2">Feedback</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 overflow-y-auto ">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.id}
                  </td>
                  <td className="border rounded-lg p-2 w-10 h-10 py-2">{item.flag}</td>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.countryName}
                  </td>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.name}
                  </td>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.reserveTime}
                  </td>
                  <td className="border py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                      {item.action}
                    </button>
                  </td>
                  <td className="border py-2">
                    <FeedBack />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table



