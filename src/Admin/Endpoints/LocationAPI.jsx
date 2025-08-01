import { apiConnector } from "../ApiConnector/apiConnector";
import axios from "axios";
import { locationEndpoints } from "./endpoints";


const { GET_lOCATIONS, POST_LOCATION } = locationEndpoints;

export const postLocation =  async (country , state , town ) => {
    console.log("checking post location url ->", POST_LOCATION)
    try {
        const response = await apiConnector(
            'POST', POST_LOCATION,
            { country, state, town },
            { withCredentials: true }
        );
        console.log("Response from post location:", response);
        if (response.status === 201) {

            console.log("Location created successfully:", response.data);
            return response.data; // Return the created location data
        }
         else {
            console.error("Failed to create location:", response.data);
            throw new Error("Non-200 response");
        }
        
    } catch (error) {
        console.log("Error during post location:", error);
        throw error;   
    }
}
export const getLocations  = async () => {
    console.log("checking get locations url ->", GET_lOCATIONS)
    try {
        const response = await apiConnector(
            'GET', GET_lOCATIONS,
            null,
            { withCredentials: true }
        );
        console.log("Response from get locations:", response);
        if (response.status === 200) {
            console.log("Locations fetched successfully:", response.data);
            return response.data; // Return the list of locations
        } else {
            console.error("Failed to fetch locations:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during get locations:", error);
        throw error;
    }
}
