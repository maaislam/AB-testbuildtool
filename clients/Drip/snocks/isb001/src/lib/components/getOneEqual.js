export const getOneEqual = (prods,selectedVariant)=>{
    const { option1: v1 } = selectedVariant;
 const arr = prods.filter(({option1}) => {
      return v1 === option1;
   });
   return arr;
}