import md5 from 'md5';

const input = 'yzbqklnj';
const partOnePrefix = '00000';
const partTwoPrefix = '000000';

export default function day4() {
  const partOne = calculateHash(input, partOnePrefix);
  const partTwo = calculateHash(input, partTwoPrefix, partOne);
  return Promise.resolve({ partOne, partTwo });
}

export function calculateHash(input, prefix, suffix = 0) {
  return md5(input + suffix).startsWith(prefix) ? suffix : calculateHash(input,prefix, suffix + 1);
}
