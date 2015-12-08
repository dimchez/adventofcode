import fs from 'fs';

export default function day3() {
  const input = fs.readFileSync('./day3/input.txt', 'utf8').trim();
  return Promise.resolve({
    partOne: convertPathToVisits(input).length,
    partTwo: convertPathToVisitsTurnBased(input).length
  });
}

export function convertPathToVisits(input) {
  return processInput(input, pathToVisits, [{ x: 0, y:0 }]);
}

export function convertPathToVisitsTurnBased(input) {
  return processInput(input, pathToVisitsTurnBased, [{ x: 0, y:0, visited: 2 }])
}

function processInput(input, reducer, accumulator) {
  return [...input]
    .reduce(reducer, accumulator)
    .sort(sortCoordinates)
    .reduce(countUniqueVisits, []);
}

function pathToVisitsTurnBased(result, char, index) {
  const turnBasedIndex = index < 2 ? 0 : index - 1;
  return pathToVisits(result, char, turnBasedIndex);
}

function pathToVisits(result, char, index) {
  result.push(getCoordinates(char, result[index]));
  return result;
}

function countUniqueVisits(result, coord) {
  const { x, y } = result.length ? result[result.length - 1] : {};

  if (x === coord.x && y === coord.y) {
    result[result.length - 1].visited += 1;
  } else {
    result.push(Object.assign({}, coord, { visited: 1 }));
  }

  return result;
}

function getCoordinates(char, {x, y}) {
  if (char === '>') {
    return { x: x + 1, y };
  } else if (char === '<') {
    return { x: x - 1, y };
  } else if (char === '^') {
    return { x, y: y + 1 };
  } else if (char === 'v') {
    return { x, y: y - 1 };
  }
}

function sortCoordinates(coord1, coord2) {
  if (coord1.x === coord2.x && coord1.y === coord2.y) {
    return 0;
  } else if(coord1.x < coord2.x ||
      (coord1.x === coord2.x && coord1.y < coord2.y)) {
    return -1;
  }
  return 1;
}
