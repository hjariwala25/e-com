const fs = require('node:fs/promises');
const path = require("path")

async function getStoredItems() {
  const resolvedPath = path.resolve("/public/items.json")
  const rawFileContent = await fs.readFile(resolvedPath, { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile('items.json', JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;