import { useForm } from "react-hook-form";
import { createJob, deleteJob, updateJob, getJob } from "../api/jobs.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function JobFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateJob(params.id, data);
      toast.success("Job updated successfully", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createJob(data);
      toast.success("Job created successfully", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/jobs");
  });

  useEffect(() => {
    async function loadJob() {
      if (params.id) {
        const {
          data: { title, description },
        } = await getJob(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadJob();
  }, []);
  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>title is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>description is required</span>}
        <button className="bg-indigo-600 p-3 rounded-lg block w-full mt-3
        cursor-pointer">Save</button>
      </form>
      {params.id && (
        <button
        className="bg-red-600 p-3 rounded-lg block w-full mt-3 cursor-pointer"
          onClick={async () => {
            const accepted = window.confirm("are you sure ?");
            if (accepted) {
              await deleteJob(params.id);
              toast.error('Job deleted', {
                position: 'bottom-right',
                style : {
                  background: '#101010',
                  color: '#fff'
                }
              })
              navigate("/jobs");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
