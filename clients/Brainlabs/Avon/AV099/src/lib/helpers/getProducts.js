const getProductsData = async (handles) => {
  const promises = handles.map((handle) => {
    const url = `/products/${handle}.js`;
    return fetch(url);
  });
  const responses = await Promise.all(promises);
  const data = await Promise.all(
    responses.map((response) => {
      return response.json();
    })
  );
  console.log(data);
};

export default getProductsData;
