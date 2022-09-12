const ShippingDeFn = (id) => {
  return `<p class="${id}__shipping ${id}__shippingTextOne">
            <strong>Standardlieferung</strong>
            <br>
            Innerhalb von 1–2 Tagen.
        </p>

        <p class="${id}__shipping ${id}__shippingTextTwo">
           <strong>Expresslieferung</strong>
           <br>
           Am nächsten Werktag, wenn die Bestellung vor 14:00 Uhr erfolgt.
        </p>
        
        `;
};

const ShippingFrFn = (id) => {
  return `<p class="${id}__shipping ${id}__shippingTextOne">
            <strong>Livraison Standard</strong>
            <br>
            Entre 2 à 3 jours ouvrables.
        </p>

        <p class="${id}__shipping ${id}__shippingTextTwo">
           <strong>Livraison Express</strong>
           <br>
           Le jour ouvrable suivant si la commande est passée avant 14 h.
        </p>
        
        `;
};

export { ShippingDeFn, ShippingFrFn };
