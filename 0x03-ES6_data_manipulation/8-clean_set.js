export default function cleanSet(set, startString) {
  let newStr = '';

  if (startString.length < 1) {
    return '';
  }

  for (const word of set) {
    if (word.startsWith(startString)) {
      newStr += `${word.slice(startString.length)}-`;
    }
  }

  return newStr.slice(0, -1);
}
