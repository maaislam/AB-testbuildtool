const postRole = async (role) => {
    const url = 'https://sheetdb.io/api/v1/4jdybulmohcn6';
    const token = '5abfz4luyp3gzwo5zw5qinpey09ksbwlasrpy8zj';

    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            data: [
                {
                    other: role
                }
            ]
        })
    });
};
export default postRole;
