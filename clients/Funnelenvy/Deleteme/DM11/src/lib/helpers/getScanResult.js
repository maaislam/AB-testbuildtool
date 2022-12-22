const getScanResult = (id) => {
  const fullName = sessionStorage.getItem(`${id}__fullname`);
  const scanId = sessionStorage.getItem(`${id}__scanId`);
  const scanLogId = sessionStorage.getItem(`${id}__scanLogId`);
  const city = sessionStorage.getItem(`${id}__city`);
  const state = sessionStorage.getItem(`${id}__state`);
  const countryCode = sessionStorage.getItem(`${id}__countryCode`);
  const location = sessionStorage.getItem(`${id}__currentlocation`);
  const visitorId = sessionStorage.getItem('visitorId');

  const payload = {
    city,
    fullName,
    location,
    scanId,
    scanLogId,
    state,
    visitorId
  };

  return fetch('https://vxp.joindeleteme.com/bff/api/v1/free-scan-result', {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(payload),
    method: 'POST'
  })
    .then((response) => response.json())
    .then((data) => {
      const { siteReturnList, additionalList } = data;
      const records = [...siteReturnList, ...additionalList];
      console.log(records);
      return records;
    });
};

export default getScanResult;
