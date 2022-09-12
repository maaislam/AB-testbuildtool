const getCatalog = async () => {
  const { campaign, mrktCd } = window.PDP_MANAGER.API_DATA;
  const BASE_URL = 'south.avon.digital-catalogue.com';

  //get current rep ID

  const repResponse = await fetch(
    `/check-rep-url.php?market=${mrktCd}&rep_id=&url=${encodeURI(window.location.href)}`
  );
  const repResponseJson = await repResponse.json();
  const { rep_id } = repResponseJson;
  //get rep details
  const res = await fetch(
    `https://api.${BASE_URL}/v2/get-user-id?rep_id=${rep_id || ''}&mrktCd=${mrktCd}`
  );
  const resJson = await res.json();
  //get active catalogues
  const catalogRes = await fetch(
    `https://admin.${BASE_URL}/api/campaigns/${campaign}/brochures/?rep_id=${
      rep_id || ''
    }&rep_slug=${resJson.slug || ''}&preventCache=${window.preventCacheId}`
  );

  const catalogData = await catalogRes.json();

  console.log(catalogData);

  return catalogData;
};

export default getCatalog;
