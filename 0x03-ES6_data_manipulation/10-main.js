import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map)

console.log('###############');

updateUniqueItems(map);
console.log(map);

console.log('###############');

updateUniqueItems([3, 4]);
console.log(map);
