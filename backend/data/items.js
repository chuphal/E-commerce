import fs from "node:fs/promises";
import path from "path";
const __dirname = path.resolve();

async function getStoredItems() {
  const rawFileContent = await fs.readFile(__dirname + `/backend/items.json`, {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile(
    __dirname + "/backend/items.json",
    JSON.stringify({ items: items || [] })
  );
}

export { getStoredItems, storeItems };
