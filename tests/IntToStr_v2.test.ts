import { intToStr_v2 } from '../src/IntToStr_v2';

describe('IntToStr_v2 should convert number:', () => {
  it('into string', () => {
    expect(intToStr_v2(0, 10)).toBe('0');
    expect(intToStr_v2(473, 10)).toBe('473');
    expect(intToStr_v2(5943534, 10)).toBe('5943534');
    expect(intToStr_v2(123)).toBe('123');
  });
  it('into hex-string', () => {
    expect(intToStr_v2(255, 16)).toBe('FF');
    expect(intToStr_v2(123, 16)).toBe('7B');
    expect(intToStr_v2(0, 16)).toBe('0');
  });
  it('into binary-string', () => {
    expect(intToStr_v2(0, 2)).toBe('0');
    expect(intToStr_v2(3, 2)).toBe('11');
    expect(intToStr_v2(5, 2)).toBe('101');
  });
  it(`num can't be a negative`, () => {
    expect(intToStr_v2(-1)).toBe(`'num' can't be a negative`);
  });
});
