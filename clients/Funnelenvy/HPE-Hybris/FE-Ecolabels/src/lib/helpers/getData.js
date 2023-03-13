const getData = async (key = 'FE_data') => {
  const url = 'https://fe-hpe-public.s3.amazonaws.com/data/carbon_map.json';

  //Check if the data is already in session storage
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }

  //Make a fetch call to get the data
  const response = await fetch(url);
  if (!response.ok) {
    sessionStorage.removeItem(key);
    throw new Error(`Failed to fetch data from ${url}`);
  }
  const fetchedData = await response.json();
  console.log('fetchedData:', fetchedData);

  //Store the fetched data in session storage
  sessionStorage.setItem(key, JSON.stringify(fetchedData));

  return fetchedData;
};

export default getData;
