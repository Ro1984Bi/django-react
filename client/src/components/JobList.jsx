import { useEffect, useState } from "react";
import { getAllJobs } from "../api/jobs.api";
import { JobCard } from "./JobCard";

export function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const response = await getAllJobs();
      setJobs(response.data);
    }
    loadJobs();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
