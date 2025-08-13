import { apiConnector } from "../ApiConnector/apiConnector";
import { jobApplicationEndpoints } from "./endpoints";

const { POST_APPLICATION, GET_JOB_APPLICATIONS, DELETE_APPLICATION } =
  jobApplicationEndpoints;

export const postApplication = async (applicationData) => {
  console.log("checking POST application url ->", POST_APPLICATION);

  try {
    const response = await apiConnector(
      "POST",
      POST_APPLICATION,
      applicationData,
      {
        withCredentials: true,
        // If applicationData is FormData, apiConnector should set multipart automatically.
        // If not, uncomment next line:
        headers:
          applicationData instanceof FormData
            ? { "Content-Type": "multipart/form-data" }
            : undefined,
      }
    );

    console.log("Response from post application:", response);

    if (response.status === 201) {
      console.log("Application created successfully:", response.data);
      return response.data;
    } else {
      console.error("Failed to create application:", response.data);
      throw new Error(`Unexpected status ${response.status}`);
    }
  } catch (error) {
    console.log("Error during post application:", error);
    throw error;
  }
};

export const getJobApplications = async (query) => {
  // Build URL with optional query params (?jobId=...&page=... etc.)
  const url =
    query && Object.keys(query).length
      ? `${GET_JOB_APPLICATIONS}?${new URLSearchParams(query).toString()}`
      : GET_JOB_APPLICATIONS;

  console.log("checking GET applications url ->", url);

  try {
    const response = await apiConnector("GET", url, null, {
      withCredentials: true,
    });

    console.log("Response from get applications:", response);

    if (response.status === 200) {
      console.log("Applications fetched successfully:", response.data);
      return response.data;
    } else {
      console.log("Failed to fetch applications:", response.data);
      throw new Error(`Unexpected status ${response.status}`);
    }
  } catch (error) {
    console.log("Error during get applications:", error);
    throw error;
  }
};

export const deleteApplication = async (applicationId) => {
  const url = `${DELETE_APPLICATION}/${applicationId}`;
  console.log("checking DELETE application url ->", url);

  try {
    const response = await apiConnector("DELETE", url, null, {
      withCredentials: true,
    });

    console.log("Response from DELETE application:", response);

    if (response.status === 200) {
      console.log("Application deleted successfully:", response.data);
      return response.data;
    } else {
      console.error("Failed to delete application:", response.data);
      throw new Error(`Unexpected status ${response.status}`);
    }
  } catch (error) {
    console.log("Error during DELETE application:", error);
    throw error;
  }
};
