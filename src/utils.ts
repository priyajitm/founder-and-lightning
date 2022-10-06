import { userData } from "./types";
import axios from "axios";

 // Fetch user details against an email from API
 export const getUserData = async (userEmail: string) => {
  console.log('called')
  const userData: userData = Object.create(null);
  const userString = `https://jsonplaceholder.typicode.com/users?email=${userEmail}`;
  const apiRes = await axios.get(userString);
  userData.id = apiRes.data[0].id;
  userData.name = apiRes.data[0].name;
  return userData
};

// Fetch all the user's album against user ID
export const getUserAlbums = async (id: String | undefined) => {
  const apiString = `https://jsonplaceholder.typicode.com/users/${id}/albums`;
  const apiRes = await axios.get(apiString);
  // setUserAlbums(apiRes.data);
  return apiRes.data
};

 // Fetch all the user's photo in a particular album by an album ID
 export const getUserPhotos = async (id: String) => {
  const apiString = `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
  const apiRes = await axios.get(apiString);
  return apiRes.data;
};