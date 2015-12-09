import { calculateHash } from './../../day4';
import { expect } from 'chai';

describe('day4', () => {
  describe('calculateHash', () => {
    it('should calculate suffix for "00000" hash prefix',
      () => expect(calculateHash('yzbqklnj', '00000', 280000)).to.equal(282749));
    it('should calculate suffix for "000000" hash prefix',
      () => expect(calculateHash('yzbqklnj', '000000', 9900000)).to.equal(9962624));
  });
});
