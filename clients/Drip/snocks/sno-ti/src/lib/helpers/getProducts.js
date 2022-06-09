const getProducts = async (endPoint) => {
    try {
        const baseUrl = 'https://snocks.com/'
        const products = await fetch(`${baseUrl}${endPoint}`)
        const {product}  = await products.json()
        if(product){
            console.log('product', product)
            return product

        }
        else{
            return null
        }
    } catch (error) {
        console.log(error)
    }
  };
  
  export default getProducts;
  