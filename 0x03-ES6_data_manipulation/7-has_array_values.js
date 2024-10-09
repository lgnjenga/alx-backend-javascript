export default function hasValuesFromArray(set, array) {
  //return true if all elements in the array exist within the set.
  const st = new Set(array.map(a => set.has(a)? true : false));
  if (st.has(false))
    return false;
  return true;
}
