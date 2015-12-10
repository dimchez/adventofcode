import day1 from './day1';
import day2 from './day2';
import day3 from './day3';
import day4 from './day4';
import day5 from './day5';

const days = [day1, day2, day3, day4, day5];
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
