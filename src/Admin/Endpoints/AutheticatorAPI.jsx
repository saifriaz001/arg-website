import { apiConnector } from "../ApiConnector/apiConnector";
import axios from "axios";
import { imageKitEndpoints } from "./endpoints";

const { AUTHENTICATION } = imageKitEndpoints;

export const getImageKitAuth = async () => {
    console.log("Checking ImageKit authentication URL ->", AUTHENTICATION);
    try {
        const response = await apiConnector(
            'GET', AUTHENTICATION,
            null,
            { withCredentials: true }
        );
        console.log("Response from ImageKit auth:", response);
        if (response.status === 200) {
            console.log("ImageKit authentication successful:", response.data);
            return response.data; // Return the authentication data
        } else {
            console.error("Failed to authenticate with ImageKit:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during ImageKit authentication:", error);
        throw error;
    }
}

