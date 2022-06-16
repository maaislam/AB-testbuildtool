
    const path = require('path');
    
    module.exports = {
      // Source files
    
      src: path.resolve(__dirname, `../clients/Red-Eye/LaRedoute/LAR-804/src`),
    
      // Production build files
      build: path.resolve(__dirname, `../clients/Red-Eye/LaRedoute/LAR-804/public`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, `../clients/Red-Eye/LaRedoute/LAR-804/public`),
    
      templateHTML: path.resolve(__dirname, '../template.html'),
    };
    