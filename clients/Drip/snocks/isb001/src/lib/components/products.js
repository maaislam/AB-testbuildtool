import { getOneEqual } from "./getOneEqual";
import { getPriorityArray } from "./getPriorityArray";
import { getTWoEqual } from "./getTwoEqual";


export const getProducts = async ({ productId, selectedVariant }) => {
  try {
    const changeProducts = (prods, selectedVariant) => {
      console.log('selectedVariant', selectedVariant);
      const { option1: v1, option2: v2, option3: v3 } = selectedVariant;

      var newaProdAray = [];
      // const allEqual = getPriorityArray(prods,selectedVariant);
      // console.log("allEqual", allEqual);
      for(let i=0;i<prods.length;i++){
           var vari = prods[i].variants;
           for(let i=0;i<vari.length;i++){
               if(vari[i].option1 == v1){
                // if(newaProdAray.contains(vari[i])){
                //   continue;
                // }
                newaProdAray.push(vari[i]);
               }
           }
      }
      return newaProdAray;
    };
    
    const res = await fetch(`/recommendations/products.json?product_id=${productId}&limit=15`);
    const data = await res.json();
    const {products} = data;
     console.log("products", products);
    
    const changedProds = changeProducts(products, selectedVariant);


    let finalProds = [];
    const allEqual = getPriorityArray(changedProds,selectedVariant);
    console.log("allEqual", allEqual);
    const twoEqual = getTWoEqual(changedProds,selectedVariant);
    const oneEqual = getOneEqual(changedProds,selectedVariant);
    finalProds = [...allEqual,...twoEqual,...oneEqual];
    console.log("final",finalProds);

    Array.prototype.unique = function() {
      var a = this.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }
  
      return a;
  };

  var ar = finalProds.unique(); 
  console.log("unique", ar[0]);
    return ar.splice(0,15);
  } catch (error) {
    throw new Error(error);
  }
};



