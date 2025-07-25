import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const JobDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState({});
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  const apply = async () => {
    await axios.post(`http://localhost:5000/api/applications/${id}/apply`, { coverLetter, resume }, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    alert("Applied!");
  };

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <textarea placeholder="Cover Letter" onChange={(e) => setCoverLetter(e.target.value)} />
      <input placeholder="Resume URL" onChange={(e) => setResume(e.target.value)} />
      <button onClick={apply}>Apply</button>
    </div>
  );
};

export default JobDetail;
