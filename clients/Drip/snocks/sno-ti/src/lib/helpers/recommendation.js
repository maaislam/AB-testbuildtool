import getProducts from "./getProducts"


const getVariant = (prods, selectedVariant)=>{
    const {option1:v1, option2:v2, option3:v3} = selectedVariant
    const p =  prods.reduce((acc, curr)=>{
      const prod = curr.variants.find(({option1, option2})=> v1===option1 && v2===option2)
      
      return prod ? [...acc, prod] : acc
    }, [])
  return p
  }

export const getRecommendation = async ({productId, selectedVariant}) => {
    try {
        const {products} = await getProducts(`/recommendations/products.json?product_id=${productId}&limit=15`)
        const filteredProducts = getVariant(products, selectedVariant)
        return filteredProducts
    } catch (error) {
        throw new Error(error)
    }
    
}