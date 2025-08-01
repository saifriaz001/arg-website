import { apiConnector } from "../ApiConnector/apiConnector";
import { ProjectArray} from "./endpoints";



const { POST_ProjectArray , GET_PROJECTARRAY , DELETE_PROJECTARRAY } = ProjectArray;

export const postProjects = async (projects) => {
    console.log("checking post projectArray url ->", POST_ProjectArray );
    try {
        const response = await apiConnector(
            'POST',  POST_ProjectArray,
            { projects },
            { withCredentials: true }
        );
        console.log("Response from post projectArray:", response);
        if (response.status === 200) {
            console.log("ProjectArray created successfully:", response.data);
            return response.data; // Return the created market data
        } else {
            console.error("Failed to create ProjectArray:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during post projectArray:", error);
        throw error;
    }
}   

export const getProjects = async () => {
    console.log("checking get projects url ->", GET_PROJECTARRAY);
    try {
        const response = await apiConnector(
            'GET', GET_PROJECTARRAY,
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
    console.log("checking delete project url ->", `${DELETE_PROJECTARRAY}/${projectId}`);
    try {
        const response = await apiConnector(
            'DELETE', `${DELETE_PROJECTARRAY}/${projectId}`,
            null,
            { withCredentials: true }
        );
        console.log("Response from delete project:", response);
        if (response.status === 200) {
            console.log("Project deleted successfully:", response.data);
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