import { useNavigate } from "react-router-dom";

export function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div 
    className="bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer"
      onClick={() => {
        navigate(`/jobs/${job.id}`);
      }}
    >
      <h1 className="font-bold uppercase">
        {job.title}
      </h1>
      <p className="text-slate-400">{job.description}</p>
    </div>
  );
}