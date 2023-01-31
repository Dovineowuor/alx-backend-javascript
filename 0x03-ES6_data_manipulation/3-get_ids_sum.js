export default function getStudentIdsSum(array) {
  return array.reduce((acc, curr) => acc + curr.id, 0);
}
