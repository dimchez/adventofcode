import { expect } from 'chai';
import { findFinalFloor, findFirstBasementPosition } from './../../day1';

describe('day 1', () => {
  describe('find final floor', () => {
    it('should find final floor', () => expect(findFinalFloor('((())')).to.equal(1));
    it('should find final floor and skip unknown symbols', () => expect(findFinalFloor('1(2(3(abc)d)e')).to.equal(1))
  });

  describe('find basement', () => {
    it('should find basement floor', () => expect(findFirstBasementPosition('(()))((())')).to.equal(5));
    it('should not find basement floor', () => expect(findFirstBasementPosition('(((')).to.be.null);
    it('should find basement as first floor', () => expect(findFirstBasementPosition(')((')).to.equal(1));
  });
});
