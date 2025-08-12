import { apiConnector } from "../ApiConnector/apiConnector";

import { serviceEndpoints} from "./endpoints";

const LOCAL_STORAGE_KEY = 'projects_cache';
const { GET_SERVICES, POST_SERVICES , DELETE_SERVICE } = serviceEndpoints;

export const postService = async ({
  title,
  mainHeading,
  mainDescription,
  imageUrl,
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
    // Optional fields — only include them if values are provided
      ...(secondHeading && { secondHeading }),
      ...(secondDescription && { secondDescription }),
      ...(descriptionImageUrl && { descriptionImageUrl }),
      ...(highlightsHeading && { highlightsHeading }),
      ...(highlightsDescriptions && { highlightsDescriptions }),
      ...(highlightsDescriptionImageUrl && { highlightsDescriptionImageUrl }),
  };

  console.log("checking post service url ->", POST_SERVICES);

  try {
    const response = await apiConnector(
      "POST",
      POST_SERVICES,
      body,
      { withCredentials: true }
    );

    console.log("Response from post service:", response);

    if (response.status === 201) {
      console.log("Service created successfully:", response.data);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return response.data;
    }

    const msg = response?.data?.message || "Failed to create service";
    console.error("Failed to create service:", msg);
    throw new Error(msg);

  } catch (error) {
    const serverMsg =
      error?.response?.data?.message ||
      error?.message ||
      "Error creating service";

    console.log("Error during post service:", error);
    const err = new Error(serverMsg);
    err.status = error?.response?.status;
    err.details = error?.response?.data;
    throw err;
  }
};


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