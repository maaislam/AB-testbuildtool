const getSearchData = async (inputText) => {
  const apiUrl = `/search/suggest.json?q=${inputText}&resources[type]=product&resources[options][unavailable_products]=last&resources[options][fields]=title,vendor,product_type,variants.title&`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};

export default getSearchData;
