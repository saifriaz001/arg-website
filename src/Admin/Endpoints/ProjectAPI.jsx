import { apiConnector } from "../ApiConnector/apiConnector";
import { projectEndpoints} from "./endpoints";

const LOCAL_STORAGE_KEY = 'projects_cache';
const { GET_PROJECTS, POST_PROJECTS , DELETE_PROJECT } = projectEndpoints;

// Endpoints/ProjectsAPI.js
export const postProject = async ({
  title,
  mainHeading,
  mainDescription,
  imageUrl,
  country,
  state,
  city,
  market,     // array of Service/Market IDs (strings)
  services,   // array of Service IDs (strings)
  secondHeading,
  secondDescription,
  descriptionImageUrl,
  highlightsHeading,
  highlightsDescriptions,
  highlightsDescriptionImageUrl
}) => {
  const body = {
    title,
    mainHeading,
    mainDescription,
    imageUrl,
    country,
    state,
    city,
    market,
    services,
    secondHeading,
    secondDescription,
    descriptionImageUrl,
    highlightsHeading,
    highlightsDescriptions,
    highlightsDescriptionImageUrl
  };

  console.log("checking post projects url ->", POST_PROJECTS);

  try {
    const response = await apiConnector("POST", POST_PROJECTS, body, {
      withCredentials: true
    });

    console.log("Response from post project:", response);

    if (response.status === 201) {
      console.log("Project created successfully:", response.data);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return response.data;
    }

    const msg = response?.data?.message || "Failed to create project";
    throw new Error(msg);

  } catch (error) {
    const serverMsg =
      error?.response?.data?.message ||
      error?.message ||
      "Error creating project";

    // surface duplicate key nicely
    if (error?.response?.status === 409) {
      throw new Error(
        `Duplicate value: ${JSON.stringify(error?.response?.data?.keyValue || {})}`
      );
    }

    console.error("Error during post project:", error);
    const err = new Error(serverMsg);
    err.status = error?.response?.status;
    err.details = error?.response?.data;
    throw err;
  }
};


export const getProjects = async () => {
    console.log("checking get projects url ->", GET_PROJECTS);
    try {
        const response = await apiConnector(
            'GET', GET_PROJECTS,
            null,
            { withCredentials: true }
        );
        console.log("Response from get projects:", response);
        if (response.status === 200) {
            console.log("Projects fetched successfully:", response.data);
            return response.data; // Return the list of projects
        } else {
            console.error("Failed to fetch projects:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during get projects:", error);
        throw error;
    }
}

export const deleteProject = async (projectId) => {
    console.log("checking delete project url ->", `${DELETE_PROJECT}/${projectId}`);
    try {
        const response = await apiConnector(
            'DELETE', `${DELETE_PROJECT}/${projectId}`,
            null,
            { withCredentials: true }
        );
        console.log("Response from delete project:", response);
        if (response.status === 200) {
            console.log("Project deleted successfully:", response.data);
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return response.data; // Return the deleted project data
        } else {
            console.error("Failed to delete project:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during delete project:", error);
        throw error;
    }
}