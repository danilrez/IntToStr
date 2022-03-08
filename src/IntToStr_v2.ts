export const intToStr_v2 = (num: number, base: number = 10): string => {
  const convertString: string = '0123456789ABCDEF';
  if (num < 0) return `'num' can't be a negative`;
  return num < base
    ? convertString[num]
    : intToStr_v2(Math.floor(num / base), base) + convertString[num % base];
};
