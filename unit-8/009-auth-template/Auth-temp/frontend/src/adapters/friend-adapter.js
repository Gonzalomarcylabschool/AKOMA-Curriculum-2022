import { fetchHandler } from "../utils";

const baseUrl = '/api/friends';

// eating errors here for simplicity
export const getAllFriends = async () => {
  const [data] = await fetchHandler(baseUrl);
  return data || [];
};

export const getFriend = async (id) => fetchHandler(`${baseUrl}/${id}`);
