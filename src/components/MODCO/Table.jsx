import React from 'react'
const Table = () => {
    const data = [
        { id: 1, flag: <img className="border-2 rounded-xl border-gray-300" src="india.png" alt="India flag" />, name: "Akash Yadav", action: "Start",feedback: "Feedback" },
        { id: 2, flag: <img className="border-2 rounded-xl border-gray-300" src="russia.png" alt="Russia flag" />, name: "Harsh Kumar", action: "Start",feedback: "Feedback" },
        { id: 3, flag: <img className="border-2 rounded-xl border-gray-300" src="usa.jpeg" alt="USA flag" />, name: "Manish Yadav", action: "Start",feedback: "Feedback" },
        { id: 4, flag: <img className="border-2 rounded-xl border-gray-300" src="france.png" alt="France flag" />, name: "Juniper", action: "Start" ,feedback: "Feedback"},
      ];
  return (
    <div>
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
              <th className="px-2 py-2">Feedback</th>

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
                <td className="border  py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    {item.feedback}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Table
