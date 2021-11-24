import React, { useContext } from "react";
import { UserContext } from "../../context/context";

const Dashboard = () => {
  const context = useContext(UserContext);

  console.log(context);
  return <div>this is dashboard</div>;
};

export default Dashboard;
