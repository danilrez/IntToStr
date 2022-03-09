export const intToStr_v1 = (num: number, base: number = 10): string => {
  const convertString: string = '0123456789ABCDEF';
  if (num < 0) return `'num' can't be a negative`;
  if (num < base) return convertString[num];

  let res: string[] = [];

  while (num > 0) {
    let cur: number = num % base;
    res.unshift(convertString[cur]);
    num = Math.floor(num / base);
  }

  return res.join('');
};
