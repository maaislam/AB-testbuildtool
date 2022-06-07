/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const currentPath = process.argv.reduce((prev, curr) => {
  const params = curr.indexOf('n=') !== -1;
  if (!params) return '';
  prev = prev + curr.split('=')[1] + '/';
  return prev;
}, '');

const content = (currPath) => {
  const currentExperimentPath = `../clients/${currPath}`;
  const text = `
    const path = require('path');
    
    module.exports = {
      // Source files
    
      src: path.resolve(__dirname, \`${currentExperimentPath}src\`),
    
      // Production build files
      build: path.resolve(__dirname, \`${currentExperimentPath}public\`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, \`${currentExperimentPath}public\`),
    
      templateHTML: path.resolve(__dirname, '../template.html'),
    };
    `;
  return text;
};

fs.writeFile(path.resolve(__dirname, '../config/paths.js'), content(currentPath), (err) => {
  if (err) {
    console.error('ERROR', err);
  }
  // file written successfully
});
