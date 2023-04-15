import React from "react";
import Table from "./MODCO/Table";
import Tabs from "./common/Tabs";
import TimerSection from "./MODCO/TimerSection";
import RollCall from "./RollCall";
import SessionInfo from "./SessionInfo";

const Dashboard = () => {

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

export default Dashboard;
