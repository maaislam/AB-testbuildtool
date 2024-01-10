const getData = async (ID, key = `${ID}__data`) => {
    const apiUrl = 'https://cf-abtest-datastore.s3.ap-southeast-2.amazonaws.com/casinoextradata.json';

    //Check if the data is already in session storage
    const data = sessionStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }

    //Make a fetch call to get the data
    const response = await fetch(apiUrl);
    if (!response.ok) {
        sessionStorage.removeItem(key);
        throw new Error(`Failed to fetch data from ${apiUrl}`);
    }
    const fetchedData = await response.json();
    //console.log('fetchedData:', fetchedData);

    //Store the fetched data in session storage
    sessionStorage.setItem(key, JSON.stringify(fetchedData));

    return fetchedData;
};

export default getData;
