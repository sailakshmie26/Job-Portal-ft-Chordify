import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <a href={`/jobs/${job._id}`}>View</a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
