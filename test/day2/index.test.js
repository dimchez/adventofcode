import day2, { calculateSurfaceAreaWithSlack, calculateTotalRibbonLength, calculateTotalResults } from './../../day2';
import { expect } from 'chai';

const day2Results = { partOne: 1598415, partTwo: 3812909 };
const dimentions = ['4', '3', '2'];
const expectedSurfaceArea = 58;
const expectedRibbonLength = 34;
const expectedResults = { partOne: expectedSurfaceArea, partTwo: expectedRibbonLength };
const initial = { partOne: 0, partTwo: 0 };

describe('day2', () => {
  it('should return expected values', done => day2().then(results => expect(results).to.deep.equal(day2Results)).then(() => done()));

  describe('calculateSurfaceAreaWithSlack', () =>
    it('should calculate total surface area with slack', () => expect(calculateSurfaceAreaWithSlack(...dimentions)).to.equal(expectedSurfaceArea)));

  describe('calculateTotalRibbonLength', () =>
    it('should calculate total ribbon length', () => expect(calculateTotalRibbonLength(dimentions)).to.equal(expectedRibbonLength)));

  describe('calculateTotalResults', () =>
    it('should calculate total results', () => expect(calculateTotalResults(initial, dimentions)).to.deep.equal(expectedResults)));
});
