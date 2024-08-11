const fs = require('node:fs/promises');
const path = require("path")

async function getStoredItems() {
  const resolvedPath = path.resolve("../backend", "items.json")
  const rawFileContent = await fs.readFile(resolvedPath, { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  const resolvedPath = path.resolve("../backend", "items.json")
  return fs.writeFile(resolvedPath, JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;