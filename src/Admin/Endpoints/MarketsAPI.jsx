import { apiConnector } from "../ApiConnector/apiConnector";
import axios from "axios";
import { marketEndpoints} from "./endpoints";
const { GET_MARKETS, POST_MARKETS , DELETE_MARKET } = marketEndpoints;

const LOCAL_STORAGE_KEY = 'markets_cache';

export const postMarket = async (
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
) => {
  console.log("📤 Posting market to:", POST_MARKETS);

  try {
    const payload = {
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

    const response = await apiConnector(
      'POST',
      POST_MARKETS,
      payload,
      { withCredentials: true }
    );

    console.log("✅ Response from postMarket:", response);

    if (response.status === 201) {
      console.log("✅ Market created successfully:", response.data);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return response.data;
    } else {
      console.error("❌ Failed to create market:", response.data);
      throw new Error("Non-201 response from server");
    }
  } catch (error) {
    console.error("❌ Error during postMarket:", error);
    throw error;
  }
};


export const getMarkets = async () => {
    console.log("checking get markets url ->", GET_MARKETS);
    try {
        const response = await apiConnector(
            'GET', GET_MARKETS,
            null,
            { withCredentials: true }
        );
        console.log("Response from get markets:", response);
        if (response.status === 200) {
            console.log("Markets fetched successfully:", response.data);
            return response.data; // Return the list of markets
        } else {
            console.log("Failed to fetch markets:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during get markets:", error);
        throw error;
    }
}

export const deleteMarket = async (marketId) => {
    console.log("checking delete market url ->", `${DELETE_MARKET}/${marketId}`);
    try {
        const response = await apiConnector(
            'DELETE', `${DELETE_MARKET}/${marketId}`,
            null,
            { withCredentials: true }
        );
        console.log("Response from delete market:", response);
        if (response.status === 200) {
            console.log("Market deleted successfully:", response.data);
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return response.data; // Return the deleted market data
        } else {
            console.error("Failed to delete market:", response.data);
            throw new Error("Non-200 response");
        }
    } catch (error) {
        console.log("Error during delete market:", error);
        throw error;
    }
}