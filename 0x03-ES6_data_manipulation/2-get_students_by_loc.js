export default function getStudentsByLocation(array) {
  const result = array.filter(word => word.location === 'San Francisco');
  return result;
}
