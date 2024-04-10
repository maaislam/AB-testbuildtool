const { execFile } = require('child_process');
const path = require('path');

const eslintPath = path.join(__dirname, 'node_modules', '.bin', 'eslint');
const args = ['clients/123drogisterij', 'clients/adShaker', '--ext', '.js'];

execFile(eslintPath, args, (error, stdout, stderr) => {
  if (error) {
    console.error(`execFile error: ${error}`);
    return;
  }
  if (stdout) console.log(`stdout: ${stdout}`);
  if (stderr) console.error(`stderr: ${stderr}`);
});
