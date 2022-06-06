const path = require('path');
const currentExperimentPath = '../clients/Drip/snocks/sno342';

module.exports = {
  // Source files

  src: path.resolve(__dirname, `${currentExperimentPath}/src`),

  // Production build files
  build: path.resolve(__dirname, `${currentExperimentPath}/public`),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, `${currentExperimentPath}/public`),

  templateHTML: path.resolve(__dirname, '../template.html'),
};
