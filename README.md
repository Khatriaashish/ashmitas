# Ashmita Javascript class 1

## let, const, var

`let`, `const`, and `var` are used to declare variables in JavaScript.

- `let` allows you to declare block-scoped variables that can be reassigned.
- `const` is used for block-scoped variables whose values cannot be reassigned.
- `var` declares function-scoped variables and is generally avoided in modern JavaScript due to its quirks.

## Datatypes in Javascript

### Primitive Datatypes

- Number
- BigInt
- String
- undefined
- null
- symbol
- boolean
- object

## Functions in Javascript

There are several ways to define functions in JavaScript:

### 1. Function Declaration

```javascript
function greet() {
  console.log("Hello!");
}
```

### 2. Function Expression

```javascript
const greet = function () {
  console.log("Hello!");
};
```

### 3. Arrow Function

```javascript
const greet = () => {
  console.log("Hello!");
};
```

### 4. Function Constructor

```javascript
const greet = new Function('console.log("Hello!");');
```

### 5. Method in Object

```javascript
const obj = {
  greet: function () {
    console.log("Hello!");
  },
};
```

## Conditional Statements

- if-else
- switch

## Loops in Javascript

- while loop
- do while loop
- for loop
  -- for-in
  -- for-of

## Tasks

- for-in
- for-of loop
  sdasd
