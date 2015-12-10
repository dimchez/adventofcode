import readline from 'readline';
import fs from 'fs';

export default function day5() {
  const rl = readline.createInterface({
    input: fs.createReadStream('./day5/input.txt')
  });

  let niceStrings = 0;
  rl.on('line', line => niceStrings += !!isNiceString(line.trim()));

  return new Promise(resolve =>
    rl.on('close', () => resolve({ partOne: niceStrings, partTwo: 0 })));
}

export function containsVowels(input, min = 3) {
  const match = input.match(/[aeiou]/gi);
  return !!match && match.length >= min;
}

export function containsNaughtyCombinations(input) {
  return input.search(/ab|cd|pq|xy/gi) !== -1;
}

export function containsDuplicateLetters(input) {
  return input.search(/[^\w]|(.)\1/g) !== -1;
}

export function isNiceString(input) {
  return !containsNaughtyCombinations(input) &&
    containsVowels(input) &&
    containsDuplicateLetters(input);
}
