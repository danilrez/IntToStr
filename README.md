###### [Switch to 🇷🇺](https://github.com/danilrez/IntToStr/blob/main/README_ru.md#switch-to-)

# IntToStr

## Content:

1. [Description](#description)
2. [Algorithm](#algorithm)
3. [Restrictions](#restrictions)
4. [Improvements](#improvements)

---

### Description

- [x] Implement the **`IntToStr`** function that converts a number to a string

  - Don't use number-to-string conversion _(explicit or implicit)_ built-in the runtime
  - Be great if you will use ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
  - Possibility of choosing a system of numeration: binary, octal, decimal, hexadecimal
  - The result could be: a ![GitHub Badge](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat) repository, a link to a ![JSFiddle Badge](https://img.shields.io/badge/JSFiddle-0084FF?logo=jsfiddle&logoColor=fff&style=flat), etc.
  - If the implementation has any restrictions, describe them
  - If you have ideas to improve the current implementation, describe them

- [x] Implement Unit-tests

[:arrow_up: Top](#switch-to-)

### Algorithm

Let's look at an example using the number **123** and the base **10** _(system of numeration to which we will convert)_.

We'll need:

1. Variable _(mapping)_, which will match the first ten digits + latin letters, for the hexadecimal representation

```TypeScript
    const convertString: string = '0123456789ABCDEF'
```

2. Array that's storing intermediate results

```TypeScript
    let res: string[] = [];
```

Converting a number less than ten to its string equivalent is so easy: you just need to find it in our mapping. For example, for the number **7** the string would be **convertString[7]** or **"7"**. If the number is greater than **10** _(base)_, we need to split the number. It turns out that we need to split the number **123** into three digits **1**, **2**, and **3**, in which case it'll not be so difficult to convert them.

Based on this, our algorithm will have three steps:

1. Split the original number into a sequence of digits.
2. Convert each number to a string.
3. Merge the resulting one-character strings into one.

We need to figure out how to change the state and move towards the base case. This is a case where _**Integer Division and Modulus**_ helps us. Dividing **123** by **10**, we get **12** and **3** in the remainder. As a result:

1. The remainder is less than our base, therefore, can be immediately converted to a string
2. We have a number that is smaller than the original and approaches the base case

Now we need to convert to string representation **12**.
Using integer division again, we get **1** and **2** in the remainder. The problem has been reduced to the base case because it satisfies the condition **`number < base`**.

The described example is in the form of a diagram:
![concept](https://raw.githubusercontent.com/danilrez/IntToStr/main/src/images/concept.png)

Let's go through the algorithm again, but consider an example in which we will convert the number **10** into a binary string _('1010')_.

![binary](https://raw.githubusercontent.com/danilrez/IntToStr/main/src/images/binary.png)

Both of these illustrations show us that we get the desired result but in the wrong order. Because of that, we need to write the result of the conversion to an array that stores the intermediate result using the **unshift()** method. In this case, each iteration will add the result of the conversion to our array to the first position, and we will get the expected result.

The solution is presented in the file **[`IntToStr_v1.ts`](https://github.com/danilrez/IntToStr/blob/main/src/IntToStr_v1.ts)**

[:arrow_up: Top](#switch-to-)

### Restrictions

1. The function converts only numbers **> 0**
2. Possible base _(system of numeration to which we will convert)_: from **2** to **16**
3. If base is not set, converts to decimal by default

[:arrow_up: Top](#switch-to-)

### Improvements

An alternative way to improve the current implementation, recursion can be used. The solution is presented in the file **[`IntToStr_v2.ts`](https://github.com/danilrez/IntToStr/blob/main/src/IntToStr_v2.ts)**

[:arrow_up: Top](#switch-to-)
