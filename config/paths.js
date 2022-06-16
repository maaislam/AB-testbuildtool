
    const path = require('path');
    
    module.exports = {
      // Source files
    
      src: path.resolve(__dirname, `../clients/Red-Eye/Vuse/BAT-799/src`),
    
      // Production build files
      build: path.resolve(__dirname, `../clients/Red-Eye/Vuse/BAT-799/public`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, `../clients/Red-Eye/Vuse/BAT-799/public`),
    
      templateHTML: path.resolve(__dirname, '../template.html'),
    };
    