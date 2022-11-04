
    const path = require('path');
    
    module.exports = {
      // Source files
    

      src: path.resolve(__dirname, `../clients/UseltBetter/glimp/test001/src`),

      src: path.resolve(__dirname, `../clients/UseItBetter/glimp/Glimp002/src`),
    
      // Production build files
      build: path.resolve(__dirname, `../clients/UseItBetter/glimp/Glimp002/public`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, `../clients/UseItBetter/glimp/Glimp002/public`),
    
      // Production build files
      build: path.resolve(__dirname, `../clients/UseltBetter/glimp/test001/public`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, `../clients/UseltBetter/glimp/test001/public`),

    
      templateHTML: path.resolve(__dirname, '../template.html'),
    };
    