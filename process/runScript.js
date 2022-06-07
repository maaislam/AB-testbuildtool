/* eslint-disable no-undef */
const { exec } = require('child_process');
const prompt = require('prompt');

prompt.start();

prompt.get(['clientName', 'siteName', 'experimentName'], function (err, result) {
  if (err) {
    return onErr(err);
  }

  exec(
    `npm run configpath -- cn=${result.clientName} sn=${result.siteName} en=${result.experimentName}`
  );
});

function onErr(err) {
  console.log(err);
  return 1;
}
