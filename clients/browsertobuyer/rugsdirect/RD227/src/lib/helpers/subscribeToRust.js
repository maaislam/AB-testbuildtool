const subscribeToRust = async (email, VARIATION) => {
  try {
    //Ensure VARIATION is correctly formatted as "v1" or "v2"
    const variation = `v${VARIATION}`.toLowerCase();

    const url = `https://hooks.zapier.com/hooks/catch/3538884/2gebqy2/?email=${encodeURIComponent(
      email
    )}&variation=${encodeURIComponent(variation)}`;

    //Send GET request
    const response = await fetch(url, {
      method: 'GET'
    });

    //Try to parse as JSON; if it fails, return plain text
    const textData = await response.text();
    let data;

    try {
      data = JSON.parse(textData);
    } catch (error) {
      data = {
        status: 'error',
        message: textData
      };
    }

    return data;
  } catch (error) {
    console.error('Network Error:', error);
    return {
      status: 'error',
      message: 'Request failed'
    };
  }
};

export default subscribeToRust;
