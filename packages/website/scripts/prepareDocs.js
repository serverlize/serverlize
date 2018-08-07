const path = require('path');
const fs = require('fs-extra');

const rootPath = path.resolve(__dirname, '..', '..', '..');
const docsPath = path.resolve(rootPath, 'docs');

const createFrontMatter = ({ id, title }) => {
  return `---
id: ${id}
title: ${title}
---`;
};

const files = [
  {
    from: path.resolve(rootPath, 'README.md'),
    to: path.resolve(docsPath, 'introduction-readme.md'),
    frontMatter: createFrontMatter({
      id: 'introduction-readme',
      title: 'Introduction',
    }),
  },
  {
    from: path.resolve(rootPath, 'CONTRIBUTING.md'),
    to: path.resolve(docsPath, 'developer-contributing.md'),
    frontMatter: createFrontMatter({
      id: 'developer-contributing',
      title: 'Contributing',
    }),
  },
];

async function processFile(file) {
  const srcFileContents = await fs.readFile(file.from, 'utf8');
  // const destFileContents = await fs.readFile(file.to, 'utf8');

  // Strip any `h1` markdown headers
  const formattedContents = srcFileContents.replace(/^#\s(.*)/g, '');

  await fs.writeFile(file.to, `${file.frontMatter}${formattedContents}`);
}

files.map(processFile);
