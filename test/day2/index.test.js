import { calculateSurfaceAreaWithSlack, calculateTotalRibbonLength, calculateTotalResults } from './../../day2';
import { expect } from 'chai';

const dimentions = ['4', '3', '2'];
const expectedSurfaceArea = 58;
const expectedRibbonLength = 34;
const expectedResults = { partOne: expectedSurfaceArea, partTwo: expectedRibbonLength };
const initial = { partOne: 0, partTwo: 0 };

describe('day2', () => {
  describe('calculateSurfaceAreaWithSlack', () =>
    it('should calculate total surface area with slack', () => expect(calculateSurfaceAreaWithSlack(...dimentions)).to.equal(expectedSurfaceArea)));

  describe('calculateTotalRibbonLength', () =>
    it('should calculate total ribbon length', () => expect(calculateTotalRibbonLength(dimentions)).to.equal(expectedRibbonLength)));

  describe('calculateTotalResults', () =>
    it('should calculate total results', () => expect(calculateTotalResults(initial, dimentions)).to.deep.equal(expectedResults)));
});
