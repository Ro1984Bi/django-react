import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/jobs">
        <h1 className="font-bold text-3xl mb-4">Job App</h1>
      </Link>
      <button className="bg-indigo-600 px-3 py-2 rounded-lg cursor-pointer">
      <Link to="/jobs-create">Create Job</Link>
      </button>
    </div>
  );
}
