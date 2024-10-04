export default function createReportObject(employeesList) {
  const allEmployees = Object.keys(employeesList).reduce((acc, department) => ({
    ...acc,
    [department]: employeesList[department],
  }), {});

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
