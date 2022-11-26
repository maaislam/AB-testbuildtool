const path = require('path');

module.exports = {
  // Source files

  src: path.resolve(__dirname, `../clients/Funnelenvy/deleteme/DM10/src`),

  // Production build files
  build: path.resolve(__dirname, `../clients/Funnelenvy/deleteme/DM10/public`),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, `../clients/Funnelenvy/deleteme/DM10/public`),

  templateHTML: path.resolve(__dirname, '../template.html')
};
