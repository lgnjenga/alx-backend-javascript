export default function iterateThroughObject(reportWithIterator) {
  let employeesString = '';
  let employee;

  do {
    employee = reportWithIterator.next();
    if (!employee.done) {
      employeesString += `${employee.value} | `;
    }
  } while (!employee.done);

  return employeesString.slice(0, -2);
}
