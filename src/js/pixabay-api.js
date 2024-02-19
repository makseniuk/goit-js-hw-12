import axios from 'axios';
export async function getPhotosByRequest(userRequest, currentPage) {
  const API_KEY = '42352461-d27876008a3fe8f87c84519b3';
  const BASE_URL = 'https://pixabay.com';
  const END_POINTS = '/api/';
  const url = BASE_URL + END_POINTS;

  const params = {
    key: API_KEY,
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };

  const response = await axios.get(url, { params });

  return response.data;
}