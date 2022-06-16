
    const path = require('path');
    
    module.exports = {
      // Source files
    
      src: path.resolve(__dirname, `../clients/MiniKatana/minikatana/mk-01/src`),
    
      // Production build files
      build: path.resolve(__dirname, `../clients/MiniKatana/minikatana/mk-01/public`),
    
      // Static files that get copied to build folder
      public: path.resolve(__dirname, `../clients/MiniKatana/minikatana/mk-01/public`),
    
      templateHTML: path.resolve(__dirname, '../template.html'),
    };
    