import day5, { containsVowels, containsDuplicateLetters, containsNaughtyCombinations, isNiceString } from './../../day5';
import { expect } from 'chai';

const day5Results = { partOne: 255, partTwo: 0 };

describe('day5', () => {
  it('should return expected values', done =>
    day5()
      .then(results => expect(results).to.deep.equal(day5Results))
      .then(() => done()));

  describe('containsVowels', () =>{
    it('should return true for string with min 3 vowels', () => expect(containsVowels('ugknbfddgicrmopn')).to.be.true);
    it('should return false for string without vowels', () => expect(containsVowels('xzgv')).to.be.false);
    it('should return false for string with less than 3 vowels', () => expect(containsVowels('xzgvaa')).to.be.false);
  });

  describe('containsDuplicateLetters', () => {
    it('should return true for strings with duplicate letters',
      () => expect(containsDuplicateLetters('ugknbfddgicrmopn')).to.be.true);
    it('should return false for strings without duplicate letters',
      () => expect(containsDuplicateLetters('ugknbfdgicrmopn')).to.be.false);
    it('should return true for strings with same letters',
      () => expect(containsDuplicateLetters('uuu')).to.be.true);
  });

  describe('containsNaughtyCombinations', () => {
    it('should return true for strings with naughty combinations',
      () => expect(containsNaughtyCombinations('haegwjzuvuyypxyu')).to.be.true);
    it('should return false for strings without naughty combinations',
        () => expect(containsNaughtyCombinations('haegwjzuvuyypxu')).to.be.false);
  });

  describe('isNiceString', () => {
    it('should return true for nice strings', () => expect(isNiceString('ugknbfddgicrmopn')).to.be.true);
    it('should return true for nice containing same symbols', () => expect(isNiceString('aaa')).to.be.true);
    it('should return false for strings without vowels', () => expect(isNiceString('gknbfddgcrmpn')).to.be.false);
    it('should return false for strings with less than 3 vowels', () => expect(isNiceString('ugknbfddgicrmpn')).to.be.false);
    it('should return false for strings without double letters', () => expect(isNiceString('ugknbfgicrmopn')).to.be.false);
    it('should return false for strings with naughty combinations', () => expect(isNiceString('ugknbfddgicrmopnxy')).to.be.false);
  });
});
