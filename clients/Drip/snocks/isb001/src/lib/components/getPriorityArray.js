export const getPriorityArray = (prods,selectedVariant)=>{
    const { option1: v1, option2: v2, option3: v3 } = selectedVariant;
 const arr = prods.filter(({option1,option2,option3}) => {
      return v1 === option1  && v2 === option2 && v3 === option3;
   });
   return arr;
}