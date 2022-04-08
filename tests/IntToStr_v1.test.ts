import { intToStr_v1 } from '../src/IntToStr_v1';

describe('IntToStr_v1 should convert number:', () => {
  it('into string', () => {
    expect(intToStr_v1(0, 10)).toBe('0');
    expect(intToStr_v1(473, 10)).toBe('473');
    expect(intToStr_v1(5943534, 10)).toBe('5943534');
    expect(intToStr_v1(123)).toBe('123');
  });
  it('into hex-string', () => {
    expect(intToStr_v1(255, 16)).toBe('FF');
    expect(intToStr_v1(123, 16)).toBe('7B');
    expect(intToStr_v1(0, 16)).toBe('0');
  });
  it('into binary-string', () => {
    expect(intToStr_v1(0, 2)).toBe('0');
    expect(intToStr_v1(3, 2)).toBe('11');
    expect(intToStr_v1(5, 2)).toBe('101');
  });
  it(`num can't be a negative`, () =>
    expect(intToStr_v1(-1)).toBe(`'num' can't be a negative`));
});
