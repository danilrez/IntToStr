###### [Switch to 🇷🇺](https://github.com/danilrez/IntToStr/blob/main/README_ru.md#switch-to-)

# IntToStr

## Content:

1. [Description](#задача)
2. [Algorithm](#алгоритм)
3. [Restrictions](#ограничения)
4. [Improvements](#идеи-по-улучшению)

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

[:arrow_up: Top](#inttostr)

### Algorithm

Рассмотрим конкретный пример, используя число **123** и основание **10** _(система счисления, в которую будем конвертировать)_.

Нам понадобится:

1. Переменная _(наш маппинг)_, которая будет соответствовать первым десяти цифрам + латинским буквам, для шестнадцатеричного представления

```TypeScript
    const convertString: string = '0123456789ABCDEF'
```

2. Массив, хранящий промежуточные результаты

```TypeScript
    let res: string[] = [];
```

Конвертировать число, меньшее десяти, в его строковый эквивалент очень просто: нужно всего лишь найти его в нашем маппинге. Например, для числа **7** строка будет **convertString[7]** или **"7"**. Если число будет больше **10** _(основания)_, нам необходимо организовать разбиение числа. Получается, что нам необходимо разбить число **123** на три цифры **1**, **2** и **3**, в этом случае конвертировать их будет не трудно.

Исходя из этого наш алгоритм будет иметь три шага:

1. Разбить первоначальное число на последовательность цифр.
2. Конвертировать каждое число в строку.
3. Слить получившиеся односимвольные строки в одну.

Необходимо придумать, как изменять состояние и продвигаться в строну базового случая. Тут нам на помощь приходит _**деление нацело с получением остатка**_. Разделив **123** на **10** нацело, получим **12** и **3** в остатке. В результате:

1. Остаток меньше нашего основания, следовательно, сразу же может быть преобразован в строку.
2. У нас есть число, меньшее первоначального и приближающееся к базовому случаю.

Теперь нужно перевести в строковое представление **12**.
Вновь использовав деление нацело, получим **1** и **2** в остатке. Задача свелась базовому случаю, поскольку удовлетворяет условию **`число < основания`**.

Описанный пример в виде диаграммы:
![concept](https://raw.githubusercontent.com/danilrez/IntToStr/main/src/images/concept.png)

Пройдём по алгоритму ещё раз, но рассмотрим пример, в котором будем конвертировать число **10** в двоичную строку _('1010')_.

![binary](https://raw.githubusercontent.com/danilrez/IntToStr/main/src/images/binary.png)

Обе иллюстрации показывают, что мы получаем искомый результат, но в неверном порядке. Поэтому нам необходимо записывать результат конвертации в массив, хранящий промежуточный результат, используя метод **unshift()**. В этом случае, каждая последующая итерация будет добавляться результат конвертации в наш массив на первую позицию, и мы получим ожидаемый результат.

Решение представлено в файле **[`IntToStr_v1.ts`](https://github.com/danilrez/IntToStr/blob/main/src/IntToStr_v1.ts)**

[:arrow_up: Top](#inttostr)

### Restrictions

1. The function converts only numbers **> 0**
2. Possible base _(system of numeration to which we will convert)_: from **2** to **16**
3. If base is not set, converts to decimal by default

[:arrow_up: Top](#inttostr)

### Improvements

An alternative way to improve the current implementation, recursion can be used. The solution is presented in the file **[`IntToStr_v2.ts`](https://github.com/danilrez/IntToStr/blob/main/src/IntToStr_v2.ts)**

[:arrow_up: Top](#inttostr)
