import axios from 'axios';

export const fetchImage = async (query, page) => {
  const params = {
    key: '48402160-f594e3af2ab1a291d25f94918',
    q: query,
    image_type: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };
  const response = await axios.get(`https://pixabay.com/api/`, { params });
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.data;
};
