import { apiConnector } from "../ApiConnector/apiConnector";

import { serviceEndpoints} from "./endpoints";

const LOCAL_STORAGE_KEY = 'projects_cache';
const { GET_SERVICES, POST_SERVICES , DELETE_SERVICE } = serviceEndpoints;

export const postService = async (title, heading, description, imageUrl) => {
    console.log("checking post service url ->", POST_SERVICES);
    try {
        const response = await apiConnector(
            'POST', POST_SERVICES,
            { title, heading, description, imageUrl },
            { withCredentials: true }
        );
        console.log("Response from post service:", response);
        if (response.status === 201) {
            console.log("Service created successfully:", response.data);
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return response.data; // Return the created service data
        } else {
            console.error("Failed to create service:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during post service:", error);
        throw error;
    }
}

export const getServices = async () => {
    console.log("checking get services url ->", GET_SERVICES);
    try {
        const response = await apiConnector(
            'GET', GET_SERVICES,
            null,
            { withCredentials: true }
        );
        console.log("Response from get services:", response);
        if (response.status === 200) {
            console.log("Services fetched successfully:", response.data);
            return response.data; // Return the list of services
        } else {
            console.error("Failed to fetch services:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during get services:", error);
        throw error;
    }
}   

export const deleteService = async (serviceId) => {
    console.log("checking delete service url ->", `${DELETE_SERVICE}/${serviceId}`);
    try {
        const response = await apiConnector(
            'DELETE', `${DELETE_SERVICE}/${serviceId}`,
            null,
            { withCredentials: true }
        );
        console.log("Response from delete service:", response);
        if (response.status === 200) {
            console.log("Service deleted successfully:", response.data);
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return response.data; // Return the deleted service data
        } else {
            console.error("Failed to delete service:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during delete service:", error);
        throw error;
    }
}   