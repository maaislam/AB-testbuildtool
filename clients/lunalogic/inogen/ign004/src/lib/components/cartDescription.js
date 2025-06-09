const cartDescription = (id, cartInfoObj, totalQuantity) => {
  const { subtotal, shipping, estimatedSalesTax, orderTotal } = cartInfoObj;
  const html = `
    <div class="${id}__bag-summary">
        <h2>Your Bag</h2>
        ${
          orderTotal
            ? `<p class="item-count">${totalQuantity} ${totalQuantity > 1 ? 'items' : 'item'}</p>`
            : ''
        }
        ${
          subtotal
            ? `
             <div class="line-item">
                <span>Cart Subtotal</span>
                <span>${subtotal}</span>
            </div>
            `
            : ''
        }   
        ${
          shipping
            ? `
                <div class="line-item">
                    <span>Shipping</span>
                    <span>${shipping.includes('Free Shipping') ? 'Free' : `${shipping}`}</span>
                </div>
            `
            : ''
        }  
        ${
          estimatedSalesTax
            ? `
                <div class="line-item">
                    <span>Estimated Sales Tax</span>
                    <span>${estimatedSalesTax}</span>
                </div>
            `
            : ''
        } 
        ${
          orderTotal
            ? `
         
            <div class="total">
                <span>Order Total</span>
                <span>${orderTotal}</span>
            </div>  
            `
            : ''
        }
        <a href="/cart" class="view-cart-btn">VIEW CART</a>
    </div>

  `;
  return html.trim();
};

export default cartDescription;
