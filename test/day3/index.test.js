import day3, { convertPathToVisits, convertPathToVisitsTurnBased } from './../../day3';
import { expect } from 'chai';

const day3Results = { partOne: 2592, partTwo: 2360 };

describe('day3', () => {
  it('should return expected values', done =>
    day3()
      .then(result => expect(result).to.deep.equal(day3Results))
      .then(() => done()));

  describe('convertPathToVisits', () =>
    it('should convert path to visits', () => expect(convertPathToVisits('^>v<^').length).to.equal(4)));

  describe('convertPathToVisitsTurnBased', () =>
    it('should convert path to turn based visits', () => expect(convertPathToVisitsTurnBased('^v^v^v^v^v').length).to.equal(11)));
});
