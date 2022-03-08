const intToStr = (num: number, base: number = 10): string => {
  const convertString: string = '0123456789ABCDEF';
  if (num < base) return convertString[num];

  let cur: number = 0;
  let res: string[] = [];

  while (num > 0) {
    cur = num % base;
    res.unshift(convertString[cur]);
    num = Math.floor(num / base);
  }

  return res.join('');
};
