import Axios from "axios";

const headers = {
  "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
};

export const axios = Axios.create({
  baseURL: "https://bayut.p.rapidapi.com/",
  headers: headers,
});

export const axiosOwnServer = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api`,
});
