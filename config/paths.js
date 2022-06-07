
    const path = require('path');
    
    module.exports = {
      // Source files
    
      src: path.resolve(__dirname, `../clients/Drip/snocks/sno123/src`),
    
      // Production build files
      build: path.resolve(__dirname, `../clients/Drip/snocks/sno123/public`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, `../clients/Drip/snocks/sno123/public`),
    
      templateHTML: path.resolve(__dirname, '../template.html'),
    };
    