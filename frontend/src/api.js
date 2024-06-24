// src/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", // Adjust URL based on your backend API endpoint
  headers: {
    "Content-Type": "application/json",
    // Add any other headers if needed
  },
});

export default instance;
