/* eslint-disable no-undef */

const fse = require('fs-extra');
const prompt = require('prompt');

prompt.start();

prompt.get(['clientName', 'siteName', 'experimentName'], function (err, result) {
  if (err) {
    return onErr(err);
  }

  const { clientName, siteName, experimentName } = result;

  const dir = `${__dirname}/clients/${clientName}/${siteName}/${experimentName}/`;

  fse
    .ensureDir(dir)
    .then(
      () => fse.pathExists(`${dir}/src`) // => false
    )
    .then((exists) => {
      if (exists) return;
      fse.copy(`./template/`, dir);
      console.log("Build success! -- now 'npm start' to start development");
    })
    .catch((err) => {
      console.error(err);
    });
});

function onErr(err) {
  console.log(err);
  return 1;
}
