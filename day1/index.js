import { Promise } from 'es6-promise';
import fs from 'fs';

export default function day1() {
  const input = fs.readFileSync('./day1/input.txt', 'utf8');
  const finalFloor = findFinalFloor(input);
  const firstBasementPosition = findFirstBasementPosition(input);
  return Promise.resolve({ partOne: finalFloor, partTwo: firstBasementPosition });
}

export function findFinalFloor(input) {
  return [...input].reduce(nextFloor, 0);
}

export function findFirstBasementPosition(input) {
  const basement = [...input]
    .reduce(charToFloor, [])
    .find(elem => elem.floor === -1);

  return basement ? basement.index + 1 : null;
}

function charToFloor(floors, char, index) {
  const previousFloor = index === 0 ? 0 : floors[index - 1].floor;
  const floor = nextFloor(previousFloor, char);
  return floors.concat([{ index, floor }]);
}

function nextFloor(floor, char) {
  if (char === '(') {
    return floor + 1;
  } else if (char === ')') {
    return floor - 1;
  } else {
    return floor;
  }
}
