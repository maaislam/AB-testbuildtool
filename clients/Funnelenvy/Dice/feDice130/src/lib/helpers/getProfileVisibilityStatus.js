const getProlfileVisibilityStatus = async (value) => {
    //const value = getCookie('searchableProfileId');

    const url = `https://www.dice.com/config/dice/api.json?path=${encodeURIComponent('/profiles/')}${value}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
    return null;
};
export default getProlfileVisibilityStatus;
