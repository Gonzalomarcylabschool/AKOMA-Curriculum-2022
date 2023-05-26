import { fetchHandler } from "../utils";

const baseUrl = '/api/books';

// eating errors here for simplicity
export const getAllBooks = async () => {
  const [data] = await fetchHandler(baseUrl);
  return data || [];
};

export const getBook = async (id) => fetchHandler(`${baseUrl}/${id}`);
