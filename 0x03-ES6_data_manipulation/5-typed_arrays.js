export default function createInt8TypedArray(length, position, value) {
  //JavaScript TypedArray for binary raw data.
  //returns an ArrayBuffer with Int8 value at specific position.
  //error message is 'Position outside range'.
  const buffer = new ArrayBuffer(length);
  const view8Int = new Int8Array(buffer);
  const viewR = new DataView(buffer);
  if (position > view8Int.length) {
    return ('Position outside range');
  }
  view8Int[position] = value;
  return viewR;
}
