export default function cleanSet(set, startString) {
  //returns a string of all the set values that start with a 
  //specific string.
  //bon in bonaparte returns aparte.
  const regex = new RegExp(`^${startString}`);
  const re =  [...set].filter
  (word => regex.test(word)).map(wor => wor.replace(startString, ''));

  return re.join('-');
}
