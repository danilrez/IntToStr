###### [Switch to 🇺🇸](https://github.com/danilrez/IntToStr/blob/main/README.md#switch-to-)

# IntToStr

## Содержание:

1. [Постановка задачи](#задача)
2. [Алгоритм](#алгоритм)
3. [Ограничения](#ограничения)
4. [Идеи по улучшению](#идеи-по-улучшению)

---

### Постановка задачи

- [x] Реализовать функцию **`IntToStr`** переводящую число в строку

  - Не использовать преобразование числа в строку _(явное или неявное)_, встроенное в среду исполнения
  - Желательно использовать ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
  - Возможность задать систему счисления: двоичная, восьмеричная, десятичная, шестнадцатеричная
  - Результатом может быть: репозиторий ![GitHub Badge](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat), ссылка на ![JSFiddle Badge](https://img.shields.io/badge/JSFiddle-0084FF?logo=jsfiddle&logoColor=fff&style=flat) и т.д. и т.п.
  - Если у реализации есть какие-то ограничения, указать их
  - Если есть идеи по улучшению текущей реализации, описать их

- [x] Реализовать Unit-тесты

[:arrow_up: Наверх](#switch-to-)

### Алгоритм

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

[:arrow_up: Наверх](#switch-to-)

### Ограничения

1. Функция конвертирует числа **> 0**
2. Возможное основание _(система счисления, в которую будем конвертировать)_: от **2** до **16**
3. Если основание не задано, по умолчанию конвертирует в десятичную систему счисления

[:arrow_up: Наверх](#switch-to-)

### Идеи по улучшению

В качастве альтернативы, для улучшения текущей реализации, можно использовать рекурсию. Решение представлено в файле **[`IntToStr_v2.ts`](https://github.com/danilrez/IntToStr/blob/main/src/IntToStr_v2.ts)**

[:arrow_up: Наверх](#switch-to-)
