import React from "react";
import TimerSection from "./TimerSection";
import Table from "./Table";
import RollCall from "../GSL/RollCall";
const MODDashboard = () => {

  return (
    <div>

      <div class=" w-full bg-[#f5f8fe]   rounded-b-3xl dark:hidden h-[49vh]">
        <div className="flex flex-col lg:flex-row h-screen">
          <div className="flex-1 p-4 lg:p-8">

            <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mb-8">
              <TimerSection />
              <RollCall />
              
            </div>
            <center>
              <Table />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MODDashboard;
