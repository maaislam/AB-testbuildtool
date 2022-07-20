/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const prompt = require('prompt');

prompt.start();

prompt.get(['clientName', 'siteName', 'experimentId', 'setVarFlag'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  const { clientName, siteName, experimentId, setVarFlag } = result;

  const sharedJsContent = (experimentId, setVarFlag, clientName) => `export default {
    ID: "${experimentId}",
    VARIATION: "${setVarFlag}",
    CLIENT: "${clientName}",
  };`;

  fs.writeFile(
    path.resolve(
      __dirname,
      `../clients/${clientName}/${siteName}/${experimentId}/src/lib/shared/shared.js`
    ),
    sharedJsContent(experimentId, setVarFlag, clientName),
    (err) => {
      if (err) {
        console.error('ERROR', err);
      }
      // file written successfully
    }
  );

  exec(`npm run configpath -- cn=${clientName} sn=${siteName} en=${experimentId}`);
});

function onErr(err) {
  console.log(err);
  return 1;
}
