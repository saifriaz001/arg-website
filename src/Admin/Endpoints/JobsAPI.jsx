import { apiConnector } from "../ApiConnector/apiConnector";
import axios from "axios";
import { jobEndpoints } from "./endpoints";

const { POST_JOBS, GET_JOBS, DELETE_JOBS } = jobEndpoints;

export const postJob = async (jobData) => {
  console.log("checking post market url ->", POST_JOBS);

  try {
    const response = await apiConnector("POST", POST_JOBS, jobData, {
      withCredentials: true,
    });
    console.log("Response from post job:", response);
    if (response.status === 201) {
      console.log("Job created successfully:", response.data);
      return response.data; // Return the created job data
    } else {
      console.error("Failed to create job:", response.data);
      throw new Error("Non-200 response");
    }
  } catch (error) {
    console.log("Error during post market:", error);
    throw error;
  }
};

export const getJobs = async () => {
  console.log("checking get market url ->", GET_JOBS);

  try {
    const response = await apiConnector("GET", GET_JOBS, null, {
      withCredentials: true,
    });
    console.log("Response from get job:", response);

    if (response.status === 200) {
      console.log("Job fetched successfully:", response.data);
      return response.data; // Return the list of jobs
    } else {
      console.log("Failed to fetch Job:", response.data);
      throw new Error("Non-200 response");
    }
  } catch (error) {
    console.log("Error during get job:", error);
    throw error;
  }
};

export const deleteJobs = async (jobId) => {
  console.log("checking DELETE job url ->", `${DELETE_JOBS}/${jobId}`);

  try {
    const response = await apiConnector(
      "DELETE",
      `${DELETE_JOBS}/${jobId}`,
      null,
      {
        withCredentials: true,
      }
    );
    console.log("Response from DELETE job:", response);
    if (response.status === 200) {
      console.log("Job deleted successfully:", response.data);
      return response.data; // Return the deleted job data
    } else {
      console.error("Failed to delete job:", response.data);
      throw new Error("Non-200 response");
    }
  } catch (error) {
    console.log("Error during DELETE job:", error);
    throw error;
  }
};
