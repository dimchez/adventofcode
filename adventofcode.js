import day1 from './day1';
import day2 from './day2';
import day3 from './day3';

const days = [day1, day2, day3];
adventofcode(days);

function adventofcode(days) {
  console.log('adventofcode');
  Promise.all(days.map(collectResults)).then(printResults);
}

function collectResults(day, index) {
  return day().then(result => ({ day: index + 1, result }));
}

function printResults(results) {
  results.forEach(result => console.log(result));
}
