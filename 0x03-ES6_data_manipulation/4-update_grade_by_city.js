export default function updateStudentGradeByCity(array, city, arr) {
  if (Array.isArray(array) && Array.isArray(arr)) {
    return array.filter(word => word.location === city).map((word) => { 
      const [wor] = arr.filter((item) => item.studentId === word.id);
      return {...word, grade: wor ? wor.grade :'N/A'};
  });
 }
}
