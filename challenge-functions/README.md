# Functions challenge

This challenge consists in four functions that you must implement.

## How to start?

First install the dependences:

```bash
yarn
```

Use this to test your code:

```bash
yarn test
```

Use this to run a specific test:

```bash
yarn test --test=testname
```

The `testname` must be the function that you'd like to run, like

```bash
yarn test --test=smaller # This will run only "smaller" test
```

## Challenges

### 1st Challenge: getValueByPath

* **File**: `src/getValueByPath.js`

* **What should this do?** This function should get a value from object just by having your path to go to in the object.

* **Entries**: An object or array and the path to gets the value.

* **Output**: An object containing a field called `has` showing if this path exists in object, and a field called `value` having the value in the given path.

* **Examples**:
```js
getValueByPath({ a: [8] }, 'a.0') // this must return  { has: true, value: 8 }
getValueByPath({ a: { b: { c: 1 } } }, 'a.b') // this must return  { has: true, value: { c: 1 } }
getValueByPath({}, 'a.b.c.d') // this must return  { has: false, value: undefined }
```

### 2nd Challenge: smaller

* **File**: `src/smaller.js`

* **What should this do?** This function must return the amount of numbers that are smaller than each number of given array.

* **Entries**: An array of numbers.

* **Output**: An array of numbers.

* **Examples**:
```js
smaller([5, 3, 3, 0]) // this must return  [3, 1, 0]
smaller([5, 5, 5]) // this must return  [0, 0, 0]
smaller([3, 2, 1, 0]) // this must return  [3, 2, 1, 0]
```

### 3rd Challenge: rankMostUsedLetters

* **File**: `src/rankMostUsedLetters.js`

* **What should this do?** This function must make a ranking with the three most used letters in a given phrase.

* **Entries**: A phrase.

* **Output**: An array containing the positions of the letters as a index, first must be index 0 and so son, each object must contain a field `letter`, having the letter in the position and field `times`, showing how many times this letter has been used. Your code must bring only the first three positions in the ranking, if don't have more than 2 letters in phrase, then must bring the rest of positions as an empty object.

* **Examples**:
```js
rankMostUsedLetters('Wubba Lubba Dub-Dub');
/*
must return:
[
  { letter: "b", times: 6 },
  { letter: "u", times: 4 },
  { letter: "a", times: 2 }
]
*/

rankMostUsedLetters('That\'s was she say');
/*
must return:
[
  { letter: "s", times: 4 },
  { letter: "a", times: 3 },
  { letter: "t", times: 2 }
]
*/

rankMostUsedLetters('So...');
/*
must return:
[
  { letter: "s", times: 1 },
  { letter: "o", times: 1 },
  {}
]
*/
```

* **Note**: You solution must be case-insensitive and consider only letters

### 4th Challenge: generateFibonacci

* **File**: `src/generateFibonacci.js`

* **What should this do?** Must return an array with fibonacci sequence due to given size.

* **Entries**: Fibonacci sequence size.

* **Output**: An array containing the fibonacci sequence until the given size.

* **Examples**:

```js
generateFibonacci(0) // returns: []
generateFibonacci(1) // returns: [0]
generateFibonacci(4) // returns: [0, 1, 1, 2]
```
