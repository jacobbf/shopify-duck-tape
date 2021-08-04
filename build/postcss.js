const postcss = require("postcss");

const fs = require('fs');
const path = require('path');

const postcssConfig = require('../postcss.config');

const inputDir = 'src';
const absInputDir = path.resolve(inputDir);

function runPostcss(config) {
  fs.readFile(`${absInputDir}/${config.from}`, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      postcss(config.plugins).process( 
        data,
        { 
          from: `src/${config.from}`, 
          to: `src/${config.to}`
        }).then(result => {
          
          fs.writeFile(`${absInputDir}/${config.to}`, result.css, err => {
            if (err) {
              console.log(err)
              return
            }
          })
      })
    }
  })  
}

runPostcss(postcssConfig);