import fs from 'fs';

export default function day3() {
  const input = fs.readFileSync('./day3/input.txt', 'utf8');
  return Promise.resolve({
    partOne: convertPathToVisits(input).length,
    partTwo: convertPathToVisitsTurnBased(input).length
  });
}

export function convertPathToVisits(input) {
  return [...input.trim()]
    .reduce(pathToVisits, [{ x: 0, y:0, visited: 1 }])
    .filter(isVisited);
}

export function convertPathToVisitsTurnBased(input) {
  return [...input.trim()]
    .reduce(pathToVisitsTurnBased, [{ x: 0, y:0, visited: 2 }])
    .filter(isVisited);
}

function pathToVisitsTurnBased(result, char, index) {
  const turnBasedIndex = index < 2 ? 0 : index - 1;
  return pathToVisits(result, char, turnBasedIndex);
}

function pathToVisits(result, char, index) {
  const coords = getCoordinates(char, result[index]);
  const prevIndex = result.findIndex(({x, y}) => coords.x === x && coords.y === y);
  if (prevIndex === -1) {
    return [...result, Object.assign({}, coords, { visited: 1 })];
  }

  return [
    ...result.slice(0, prevIndex),
    Object.assign({}, coords, { visited: result[prevIndex].visited + 1 }),
    ...result.slice(prevIndex + 1),
    coords
  ];
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

function isVisited({ visited }) {
  return !!visited;
}
