import { readFile, writeFile } from 'fs/promises';

let file = await readFile(new URL('template.html', import.meta.url), 'utf-8'); // or toString() on file

const data = {
  '{title}': 'introduction to node',
  '{body}': 'pega na minha e balança'
};

for (const [k, v] of Object.entries(data)) {
  file = file.replace(k, v);
}

await writeFile(new URL('index.html', import.meta.url), file);
