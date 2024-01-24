const getProlfileVisibilityStatus = async () => {
    const profileHref = document.querySelector('.personal-links-section .link-row a').href;

    const value = profileHref.split('/profiles/')[1];

    const url = `https://www.dice.com/config/dice/api.json?path=%2Fprofiles%2F${value}`;
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
        return 0;
    }
};
export default getProlfileVisibilityStatus;
