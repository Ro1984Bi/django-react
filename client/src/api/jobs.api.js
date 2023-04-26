import axios from "axios";

const jobsApi = axios.create({
    baseURL: "http://localhost:8000/jobs/api/v1/jobs/"
})

export const getAllJobs = () => jobsApi.get('/')

export const getJob = (id) => jobsApi.get( `/${id}/`)

export const createJob = (job) => jobsApi.post('/', job)

export const deleteJob = (id) => jobsApi.delete( `/${id}`)
 
export const updateJob = (id, job) => jobsApi.put( `/${id}/`, job)