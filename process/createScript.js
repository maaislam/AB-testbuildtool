/* eslint-disable no-undef */
const fs = require('fs');
const fse = require('fs-extra');
const prompt = require('prompt');
const path = require('path');
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

  const dir = path.resolve(__dirname, `../clients/${clientName}/${siteName}/${experimentId}/`);

  fse
    .ensureDir(dir)
    .then(
      () => fse.pathExists(`${dir}/src`) // => false
    )
    .then((exists) => {
      if (exists) return;
      return fse.copy(`./template/`, dir);
      //console.log("Build success! -- now 'npm start' to start development");
    })
    .then(() => {
      fs.writeFile(
        `${dir}/src/lib/shared/shared.js`,
        sharedJsContent(experimentId, setVarFlag, clientName),
        (err) => {
          if (err) {
            console.error('ERROR', err);
          }
          // file written successfully
        }
      );
    })
    .then(() => {
      fs.writeFile(`${dir}/src/lib/shared/shared.scss`, `$id: '${experimentId}';`, (err) => {
        if (err) {
          console.error('ERROR', err);
        }
        // file written successfully
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

function onErr(err) {
  console.log(err);
  return 1;
}
