export default function getStudentIdsSum(array) {
  const sum = (x, y) => x + y;
  return array.map(word => word.id).reduce(sum);

}
