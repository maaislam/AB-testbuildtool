const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const expConfig = require('./experimentConfig');

const { CLIENT, SITE, ID } = expConfig;
const filePath = path.resolve(__dirname, `../clients/${CLIENT}/${SITE}/${ID}/src/index.js`);
const newLines = "import './experiment.scss';\n";
const searchLine = "import './experiment.scss';";

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw err;

  //Check if the search line already exists in the file and is not a comment
  const lines = data.split('\n');
  const lineExists = lines.some((line) => {
    return line.trim() === searchLine && !line.trim().startsWith('//');
  });

  if (lineExists) {
    console.log('The search line already exists in the file and is not a comment!');
  } else {
    //Append the new lines to the end of the file
    const updatedData = newLines + data;

    fs.writeFile(filePath, updatedData, (errs) => {
      if (errs) throw errs;
      console.log('New lines appended to the file!');

      //Run webpack build command
      exec('rollup --config config/rollup.config.js', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        //Delete the new lines from the file
        fs.writeFile(filePath, data, (errors) => {
          if (errors) throw errors;
          console.log('New lines deleted from the file!');
        });
      });
    });
  }
});
