const getCatalog = async () => {
  //eslint-disable-next-line no-undef
  const { campaign, mrktCd, rep_id } = PDP_MANAGER.API_DATA;
  const BASE_URL = 'we.avon.digital-catalogue.com';
  const res = await fetch(
    `https://api.${BASE_URL}/v2/get-user-id?rep_id=${rep_id}&mrktCd=${mrktCd}`
  );
  const resJson = await res.json();

  const catalogRes = await fetch(
    `https://admin.${BASE_URL}/api/campaigns/${campaign}/brochures/?rep_id=${
      rep_id || ''
    }&rep_slug=${resJson.slug || ''}&preventCache=${window.preventCacheId}`
  );

  const catalogData = await catalogRes.json();
  console.log(resJson);
  console.log(catalogData);
  const repBlock = document.querySelector('[data-item-id="shoppingWithName"]  strong');
  return {
    repName:
      resJson.config && resJson.config.shop_with_my_rep
        ? resJson.config.shop_with_my_rep.name
        : repBlock
        ? repBlock.innerText
        : undefined,
    catalogData
  };
};

export default getCatalog;
