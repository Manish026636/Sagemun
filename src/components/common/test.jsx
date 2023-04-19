import React, { useState } from "react";

const VoteTest = () => {
  const [data, setData] = useState([
    {
      id: 1,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="india.png"
          alt="India flag"
        />
      ),
      countryName: "India",
      favour: 0,
      against: 0,
      abstain: 0,
    },
    {
      id: 2,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="russia.png"
          alt="Russia flag"
        />
      ),
      countryName: "Russia",
      favour: 0,
      against: 0,
      abstain: 0,
    },
    {
      id: 3,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="usa.jpeg"
          alt="USA flag"
        />
      ),
      countryName: "USA",
      favour: 0,
      against: 0,
      abstain: 0,
    },
  ]);

  const handleVote = (id, voteType) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [voteType]: item[voteType] + 1 };
        }
        return item;
      })
    );
  };

  const calculateVotePercentage = (voteType) => {
    const totalVotes = data.reduce((acc, item) => acc + item[voteType], 0);
    const totalCountries = data.length;
    const votePercentage = (totalVotes / (totalCountries * 3)) * 100;
    return votePercentage;
  };

  const isVotePassed = () => {
    const favourPercentage = calculateVotePercentage("favour");
    const againstPercentage = calculateVotePercentage("against");
    const abstainPercentage = calculateVotePercentage("abstain");
    return favourPercentage + abstainPercentage > 50 && againstPercentage < 50;
  };

  return (
    <div className="mt-10 p-2 container mx-auto">
      <div className="bg-blue-500   h-16 rounded-xl w-full md:w-1/2">
        <h2 className="text-xl py-4 lg:text-3xl text-center text-white font-medium lg:py-3 mb-4">
          Voting on Topic Name
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
                <th className="px-2 py-2">Favour</th>
                <th className="px-2 py-2">Against</th>
                <th className="px-2 py-2">Abstain</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 overflow-y-auto ">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.id}
                  </td>
                  <td className="border rounded-lg p-2 w-10 h-10 py-2">
                    {item.flag}
                  </td>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.countryName}
                  </td>
                  <td className="border py-2">
                    <button
                      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                      onClick={() => handleVote(item.id, "favour")}
                    >
                      Vote
                    </button>
                  </td>
                  <td className="border py-2">
                    <button
                      className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                      onClick={() => handleVote(item.id, "against")}
                    >
                      Vote
                    </button>
                  </td>
                  <td className="border py-2">
                    <button
                      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                      onClick={() => handleVote(item.id, "abstain")}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8">
        {isVotePassed() ? (
          <div className="bg-green-500 text-white px-6 py-3 rounded-md text-center">
            <p className="text-lg font-medium">Vote Passed</p>
            <p className="text-md">
              Favour: {calculateVotePercentage("favour")}%
            </p>
            <p className="text-md">
              Against: {calculateVotePercentage("against")}%
            </p>
            <p className="text-md">
              Abstain: {calculateVotePercentage("abstain")}%
            </p>
          </div>
        ) : (
          <div className="bg-red-500 text-white px-6 py-3 rounded-md text-center">
            <p className="text-lg font-medium">Vote Failed</p>
            <p className="text-md">
              Favour: {calculateVotePercentage("favour")}%
            </p>
            <p className="text-md">
              Against: {calculateVotePercentage("against")}%
            </p>
            <p className="text-md">
              Abstain: {calculateVotePercentage("abstain")}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoteTest;
