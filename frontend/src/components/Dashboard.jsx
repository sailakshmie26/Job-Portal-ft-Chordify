import React, { useEffect } from "react";
import socket from "../socket";

const Dashboard = () => {
  useEffect(() => {
    socket.on("newApplication", (data) => {
      console.log("🎉 New Application Received!", data);
      alert(`New application from ${data.applicantName} for job ${data.jobId}`);
    });

    return () => {
      socket.off("newApplication");
    };
  }, []);

  return <div>Welcome to Employer Dashboard</div>;
};

export default Dashboard;
