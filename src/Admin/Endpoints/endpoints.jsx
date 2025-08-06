import React from "react";

// src/api/endpoints.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const endpoints = {
  LOGIN: `${BASE_URL}/login`,
  SIGNUP: `${BASE_URL}/signup`,
};
//DONE
export const locationEndpoints = {
  GET_lOCATIONS: `${BASE_URL}/get-location`,
  POST_LOCATION: `${BASE_URL}/create-location`,
};

export const projectEndpoints = {
  GET_PROJECTS: `${BASE_URL}/get-all-projects`,
  POST_PROJECTS: `${BASE_URL}/create-project`,
  DELETE_PROJECT: `${BASE_URL}/delete-projects`,
};

export const serviceEndpoints = {
  GET_SERVICES: `${BASE_URL}/get-all-services`,
  POST_SERVICES: `${BASE_URL}/create-services`,
  DELETE_SERVICE: `${BASE_URL}/delete-services`,
};

export const marketEndpoints = {
  POST_MARKETS: `${BASE_URL}/create-markets`,
  GET_MARKETS: `${BASE_URL}/get-all-markets`,
  DELETE_MARKET: `${BASE_URL}/delete-market`,
};

export const jobEndpoints = {
  POST_JOBS: `${BASE_URL}/create-job`,
  GET_JOBS: `${BASE_URL}/get-jobs`,
  DELETE_JOBS: `${BASE_URL}/delete-job`,
};

export const newsEndpoints = {
  POST_NEWS: `${BASE_URL}/createnews`,
  GET_NEWS: `${BASE_URL}/getnews`,
  DELETE_NEWS: `${BASE_URL}/delete-news`,
};

export const typeEndpoints = {
  GET_TYPES: `${BASE_URL}/get-all-types`,
  POST_TYPES: `${BASE_URL}/create-type`,
  DELETE_TYPE: `${BASE_URL}/delete-type`,
};

export const imageKitEndpoints = {
  AUTHENTICATION: `${BASE_URL}/imagekit/auth`,
};

export const ProjectArray = {
  POST_ProjectArray: `${BASE_URL}/create-projectArray`,
  GET_PROJECTARRAY: `${BASE_URL}/get-projectArray`,
  DELETE_PROJECTARRAY: `${BASE_URL}/delete-projectArray`,
};
