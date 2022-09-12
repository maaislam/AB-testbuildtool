export const getTWoEqual = (prods,selectedVariant)=>{
    const { option1: v1, option2: v2 } = selectedVariant;
    const arr = prods.filter(({option1,option2}) => {
      return v1 === option1  && v2 === option2;
   });
   console.log("asdf",arr);
   return arr;
}