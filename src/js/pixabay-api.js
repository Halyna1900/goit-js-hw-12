const API_KEY = '48402160-f594e3af2ab1a291d25f94918';

export const fetchImage = query => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
