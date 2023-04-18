import React, { useState } from "react";
import Modal from "react-modal";

// Data for the table
const tableData = [
  { name: "India", favor: "Yes", against: "No", abstain: "Abstain" },
  { name: "Russia", favor: "No", against: "Yes", abstain: "Abstain" },
  { name: "Australlia", favor: "No", against: "Yes", abstain: "Abstain" },
  { name: "France", favor: "No", against: "Yes", abstain: "Abstain" },
  { name: "USA", favor: "Yes", against: "No", abstain: "Abstain" },
  { name: "UK", favor: "No", against: "Yes", abstain: "Abstain" },
  { name: "China", favor: "No", against: "Yes", abstain: "Abstain" },
  { name: "Brazil", favor: "Yes", against: "No", abstain: "Abstain" },
  { name: "Germany", favor: "No", against: "Yes", abstain: "Abstain" },
  { name: "Pakistan", favor: "No", against: "Yes", abstain: "Abstain" },
  { name: "Austria", favor: "Yes", against: "No", abstain: "Abstain" },
  { name: "Poland", favor: "No", against: "Yes", abstain: "Abstain" },
];

const VotingModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        className="text-sm mr-1 mt-2 px-4 py-2 bg-blue-400 font-bold text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none"
        onClick={toggleModal}
      >
        Vote
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        bodyOpenClassName="overflow-hidden"
        className="bg-white w-full m-1 sm:w-1/2 rounded-xl  overflow-hidden"
        contentLabel="Modal"
      >
        <div className="bg-blue-500   text-white font-bold py-3 px-6">
          Voting on Topic Name
        </div>
        <div className=" md:px-6 lg:px-6 scrollbar-hide py-4 max-h-64 overflow-y-auto">
          {/* Apply max height and overflow-y auto to make the table scrollable */}
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Country</th>
                <th className="text-left px-4 py-2">Favor</th>
                <th className="text-left px-4 py-2">Against</th>
                <th className="text-left px-4 py-2">Abstain</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border-t px-4 py-2">{row.name}</td>
                  <td className="border-t px-4 py-2">
                    <input
                      type="radio"
                      name={`favor-${index}`}
                      style={{ appearance: "none" }} // Hide the default radio button
                      className="Favorradio" // Apply a custom class for styling
                    />
                  </td>

                  <td className="border-t px-4 py-2">
                    <input
                      type="radio"
                      name={`against-${index}`}
                      style={{ appearance: "none" }} // Hide the default radio button
                      className="Againstradio" // Apply a custom class for styling
                    />
                  </td>
                  <td className="border-t px-4 py-2">
                    <input
                      type="radio"
                      name={`abstain-${index}`}
                      style={{ appearance: "none" }} // Hide the default radio button
                      className="Abstainradio" // Apply a custom class for styling
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-100 px-6 py-4 flex justify-end">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-3 rounded focus:outline-none">
            Submit
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded  focus:outline-none"
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default VotingModal;
