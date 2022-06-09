const getProducts = async (endPoint) => {
    try {
        const baseUrl = 'https://snocks.com/'
        const response = await fetch(`${baseUrl}${endPoint}`)
        console.log('response', response)
        const data  = await response.json()
        if(data){
            return data

        }
        else{
            return null
        }
    } catch (error) {
       throw new Error(error)
    }
  };
  
  export default getProducts;
  