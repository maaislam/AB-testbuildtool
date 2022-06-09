const getProducts = async (endPoint) => {
    try {
        const baseUrl = 'https://snocks.com/'
        const response = await fetch(`${baseUrl}${endPoint}`)
        console.log('response', response)
        const data  = await response.json()
        if(data){
            console.log('product', data)
            return data

        }
        else{
            console.log(data)
            return null
        }
    } catch (error) {
        console.log(error)
    }
  };
  
  export default getProducts;
  