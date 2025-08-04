// src/ApiConnector/apiConnector.js
import axios from 'axios';

export const apiConnector = async (
  method,
  url,
  bodyData,
  config = {}
) => {
  try {
    const response = await axios({
      method,
      url,
      data: bodyData,
      ...config,
    });
    return response;
  } catch (error) {
    console.error("API Connector Error:", error?.response || error.message);
    throw error?.response || error;
  }
};
