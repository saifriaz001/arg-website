import { apiConnector } from "../ApiConnector/apiConnector";
import axios from "axios";
import { projectEndpoints} from "./endpoints";



const { GET_PROJECTS, POST_PROJECTS , DELETE_PROJECT } = projectEndpoints;
export const postProjects = async (title , heading, description, imageUrl , market, services, country, state, city) => {
    console.log("checking post market url ->", POST_PROJECTS );
    try {
        const response = await apiConnector(
            'POST', POST_PROJECTS,
            { title , heading, description, imageUrl , market, services, country, state, city },
            { withCredentials: true }
        );
        console.log("Response from post market:", response);
        if (response.status === 201) {
            console.log("Market created successfully:", response.data);
            return response.data; // Return the created market data
        } else {
            console.error("Failed to create market:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during post market:", error);
        throw error;
    }
}   

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