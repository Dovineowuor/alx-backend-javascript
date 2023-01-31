export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const arrayBuff = new ArrayBuffer(length);
  const valAtPos = new Int8Array(arrayBuff);
  valAtPos[position] = value;

  return new DataView(
    arrayBuff,
  );
}
