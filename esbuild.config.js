const inputDir = 'src';

module.exports = {
  entryPoints: [`${inputDir}/scripts/index.js`],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: `${inputDir}/assets/index.js`,
}