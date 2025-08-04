import { apiConnector } from "../ApiConnector/apiConnector";
import { newsEndpoints } from "./endpoints";

const { GET_NEWS, POST_NEWS , DELETE_NEWS } = newsEndpoints;


export const postNews = async (title, description, types,markets,services,date,imageUrl) => {
    console.log("checking post news url ->", POST_NEWS);
    try {       
        const response = await apiConnector(
        'POST', POST_NEWS,
        { title, description, types, markets, services, date, imageUrl },
        { withCredentials: true }
    );
        console.log("Response from post news:", response);
        if (response.status === 201) {
            console.log("News created successfully:", response.data);
            return response?.data; // Return the created news data
        } else {
            console.error("Failed to create news:", response.data);
            throw new Error("Non-200 response");
        }
    } catch(error) {
        console.log("Error during post news:", error )
    }
}

export const getNews = async () => {
    console.log("checking get news url ->", GET_NEWS);
    try {
        const response = await apiConnector(
            'GET', GET_NEWS,
            null,
            { withCredentials: true }
        );
        console.log("Response from get news:", response);
        if (response.status === 200) {
            console.log("News fetched successfully:", response.data);
            return response.data; // Return the list of news
        } else {
            console.error("Failed to fetch news:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during get news:", error);
        throw error;
    }
}

export const deleteNews = async (newsId) => {
    console.log("checking delete news url ->", `${DELETE_NEWS}/${newsId}`);
    try {
        const response = await apiConnector(
            'DELETE', `${DELETE_NEWS}/${newsId}`,
            null,
            { withCredentials: true }
        );
        console.log("Response from delete news:", response);
        if (response.status === 200) {
            console.log("News deleted successfully:", response.data);
            return response.data; // Return the deleted news data
        } else {
            console.error("Failed to delete news:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during delete news:", error);
        throw error;
    }
}

