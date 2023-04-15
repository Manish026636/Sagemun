import React from "react";
import Tabs from "../common/Tabs";
import TimerSection from "./TimerSection";
import RollCall from "../RollCall";
import Table from "./Table";
import SessionInfo from "../SessionInfo";
const GSLDashboard = () => {

  return (
    <div>
      
      <Tabs />
      <div class="absolute w-full bg-[#f5f8fe] rounded-b-3xl dark:hidden h-96">
        <div className="flex flex-col lg:flex-row h-screen">
          <div className="flex-1 p-4 lg:p-8">
            <SessionInfo />
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

export default GSLDashboard;
