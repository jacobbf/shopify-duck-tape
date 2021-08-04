const ducktape = require('../ducktape.config');

const chokidar = require('chokidar');
const watcher = chokidar.watch([ducktape.input], { persistent: true });
const { spawn } = require('child_process');

const ls = spawn(ducktape.scripts.dev, { cwd: ducktape.input });

ls.stdout.on('data', (data) => {
  console.log(`${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`${data}`);
});

ls.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

watcher.on('all', (event, path) => {
  console.log(path)
})