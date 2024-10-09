export default function groceriesList() {
  //returns a map of groceries with items and quatity
  //'Apples' => 10, 'Tomatoes' => 10, 'Paste' => 1, 'Rice' => 1,
  //'Banana' => 5.
  const myList = new Map();
  const arr = ['Apple', 'Tomatoes', 'Paste', 'Rice', 'Banana'];
  const val = [10, 10, 1, 1, 5];

  for (let a = 0; a < arr.length; a++) {
    myList.set(arr[a],val[a]); 
 }

  return myList;
}
