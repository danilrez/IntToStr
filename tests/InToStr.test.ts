import { intToStr } from '../src/IntToStr';

describe('intToStr should convert number:', () => {
  it('into string', () => {
    expect(intToStr(0, 10)).toBe('0');
    expect(intToStr(473, 10)).toBe('473');
    expect(intToStr(5943534, 10)).toBe('5943534');
    expect(intToStr(123)).toBe('123');
  });
  it('into hex-string', () => {
    expect(intToStr(255, 16)).toBe('FF');
    expect(intToStr(123, 16)).toBe('7B');
    expect(intToStr(0, 16)).toBe('0');
  });
  it('into binary-string', () => {
    expect(intToStr(0, 2)).toBe('0');
    expect(intToStr(3, 2)).toBe('11');
    expect(intToStr(5, 2)).toBe('101');
  });
  it(`num can't be a negative`, () => {
    expect(intToStr(-1)).toBe(`'num' can't be a negative`);
  });
});
