const list = ["fish", "cheese", "burgers"];

function logItem(item) {
  console.log("item>>>", item);
}

export function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}

forEach(list, logItem);
