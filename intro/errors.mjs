import { readFile } from 'fs';

readFile(new URL('app.js', import.meta.url), 'utf-8', (err, res) => {
  if (err) {
    console.log('thats the error:', err);
  } else {
    //
  }
});
