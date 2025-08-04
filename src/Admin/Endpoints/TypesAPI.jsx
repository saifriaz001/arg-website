import { apiConnector } from "../ApiConnector/apiConnector";
import { typeEndpoints} from "./endpoints";

const {GET_TYPES , POST_TYPES , DELETE_TYPE} = typeEndpoints;


export const postType = async (type) => {
    try {

        console.log("checking post type url ->", POST_TYPES);
        const response = await apiConnector(
            'POST', POST_TYPES,
            { type },
            { withCredentials: true }
        );
        console.log("Response from post type:", response);
        if (response.status === 201) {
            console.log("Type created successfully:", response.data);
            return response.data; // Return the created type data
        } else {
            console.error("Failed to create type:", response.data);
            throw new Error("Non-200 response");
        }   
        
    } catch (error) {
        console.log("Error during post type:", error);
        throw error;    
        
    }

}

export const getTypes = async () => {  
    try {
        console.log("checking get types url ->", GET_TYPES);
        const response = await apiConnector(
            'GET', GET_TYPES,
            null,
            { withCredentials: true }
        );
        console.log("Response from get types:", response);
        if (response.status === 200) {
            console.log("Types fetched successfully:", response.data);
            return response.data; // Return the list of types
        } else {
            console.error("Failed to fetch types:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during get types:", error);
        throw error;
    } 
}

export const deleteType = async (typeId) => {
    try {
        console.log("checking delete type url ->", `${DELETE_TYPE}/${typeId}`);
        const response = await apiConnector(
            'DELETE', `${DELETE_TYPE}/${typeId}`,
            null,
            { withCredentials: true }
        );
        console.log("Response from delete type:", response);
        if (response.status === 200) {
            console.log("Type deleted successfully:", response.data);
            return response.data; // Return the deleted type data
        } else {
            console.error("Failed to delete type:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during delete type:", error);
        throw error;
    }
}


