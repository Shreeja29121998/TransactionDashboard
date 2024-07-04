import axios from "axios";

export function handleApiResponse(response) {
  if (
    !["200", "201", "202", "204", "400"].includes(response?.status?.toString())
  ) {
    const error = response.statusText;

    return Promise.reject(error);
  }
  window.dispatchEvent(new Event("RESET_SESSION_TIMEOUT"));
  return response.data;
}

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
