export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((getCity) => getCity.location === city)
    .map((student) => {
      const getGrade = newGrades.find((g) => g.studentId === student.id);
      return {
        ...student,
        grade: getGrade ? getGrade.grade : 'N/A',
      };
    });
}
