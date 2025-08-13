import { apiConnector } from "../ApiConnector/apiConnector";
import axios from "axios";
import { endpoints } from "./endpoints";


const { LOGIN, SIGNUP } = endpoints;


export const login = async (email , password , navigate) =>{

    console.log("checking login url ->", LOGIN)
    try {
        const response = await apiConnector(
            'POST',LOGIN,
            { email, password },
            { withCredentials: true }
        );
        if (response.status === 200) {
            console.log("Login successful:", response.data);
            navigate ("/dashboard/create-service");
        }
        else{
            console.error("Login failed:", response.data);
        } 

    } catch (error) {
        console.log("Error during login:", error);
    }

}