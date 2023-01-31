export default function getStudentsByLocation(array, city) {
  return array.filter((getCity) => getCity.location === city);
}
