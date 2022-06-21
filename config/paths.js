
    const path = require('path');
    
    module.exports = {
      // Source files
    
      src: path.resolve(__dirname, `../clients/Drip/snocks/snoxxx/src`),
    
      // Production build files
      build: path.resolve(__dirname, `../clients/Drip/snocks/snoxxx/public`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, `../clients/Drip/snocks/snoxxx/public`),
    
      templateHTML: path.resolve(__dirname, '../template.html'),
    };
    