const sendBrazeEvent = (email, firstName, phone) => {
  const apiKey = '180c9061-d28b-4196-983e-5e7fc3d85643'; //API Key
  const brazeURL = 'https://sdk.fra-02.braze.eu/api/v3/data/';
  const storagePrefix = 'ab.storage';

  const getStorageValue = (key) => {
    const rawValue = localStorage.getItem(`${storagePrefix}.${key}.${apiKey}`);
    return rawValue ? JSON.parse(rawValue).v : null;
  };

  //Retrieve Device ID and Session ID from Local Storage
  const deviceIdData = getStorageValue('deviceId');
  const deviceId = deviceIdData ? deviceIdData.g : 'unknown_device';

  const sessionData = getStorageValue('sessionId');
  const sessionId = sessionData ? sessionData.g : 'unknown_session';

  //Get Current Unix Timestamp in Seconds
  const timestamp = Date.now() / 1000;

  //Define Events
  const events = [
    {
      name: 'sbc',
      time: timestamp,
      data: {
        trigger_ids: [
          'NjdiMzE1Njk5YjJiMzQwMDk1NGMwNWY0XyRfbXY9NjdiMzE1Njk5YjJiMzQwMDk1NGMwNWYwJnBpPWNtcA=='
        ],
        bid: 'submit'
      },
      session_id: sessionId
    },
    {
      name: 'sgu',
      time: timestamp + 0.001,
      data: {
        group_id: '8d7b46d1-6931-4f9b-860e-09a04cdf3767',
        status: 'subscribed'
      },
      session_id: sessionId
    },
    {
      name: 'ce',
      time: timestamp + 0.001,
      data: {
        n: 'ocb_nl_sub',
        p: {}
      },
      session_id: sessionId
    }
  ];

  //Define Request Payload
  const payload = {
    respond_with: {
      config: {
        config_time: timestamp
      }
    },
    events,
    attributes: [
      {
        custom: {
          brand_name: 'ocbscores'
        },
        email,
        first_name: firstName,
        phone
      }
    ],
    api_key: apiKey,
    time: timestamp,
    sdk_version: '4.9.0',
    device_id: deviceId
  };

  //Send Fetch Request with .then()
  return fetch(brazeURL, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
      'x-braze-api-key': apiKey,
      'x-requested-with': 'XMLHttpRequest'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => {
      return data; //Return response data for further use
    })
    .catch((error) => {
      console.error('Braze API Error:', error);
    });
};

export default sendBrazeEvent;
