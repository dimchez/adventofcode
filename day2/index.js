import readline from 'readline';
import fs from 'fs';

export default function day2() {
  const rl = readline.createInterface({
    input: fs.createReadStream('./day2/input.txt')
  });

  const input = [];
  rl.on('line', line => input.push(split(line)));

  return new Promise(resolve =>
    rl.on('close', () => resolve(input.reduce(calculateTotalResults, { partOne: 0, partTwo: 0 }))));
}

export function calculateTotalResults({ partOne, partTwo }, line) {
  return {
    partOne: partOne + calculateSurfaceAreaWithSlack(...line),
    partTwo: partTwo + calculateTotalRibbonLength(line),
  };
}

export function calculateSurfaceAreaWithSlack(length, width, height) {
  const areas = calcualteArea(length, width, height);
  return calculateSurfaceAreas(areas) + calculateSlack(areas);
}

export function calculateTotalRibbonLength(dimentions) {
  return calculateRibbonLength(dimentions) + calculateVolume(dimentions);
}

function calculateSlack(areas) {
  return Math.min(...areas);
}

function calculateSurfaceAreas(areas) {
  return areas.reduce((total, area) => total + 2 * area, 0);
}

function calcualteArea(length, width, height) {
  return [length * width, width * height, height * length];
}

function calculateVolume(dimentions) {
  return dimentions.reduce((volume, dimention) => volume * dimention, 1);
}

function calculateRibbonLength(dimentions) {
  dimentions.sort((a, b) => Number(a) - Number(b));
  return 2 * dimentions[0] + 2 * dimentions[1];
}

function split(line) {
  return line.split('x');
}
