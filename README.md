
# JavaScript Fundamentals

This repository contains a series of JavaScript scripts that demonstrate fundamental concepts and syntax.

## Tasks

### 0. First constant, first print
**File:** `0-javascript_is_amazing.js`

Write a script that prints "JavaScript is amazing":
- Create a constant variable called `myVar` with the value "JavaScript is amazing"
- Use `console.log(...)` to print the output
- Do not use `var`

Example:
```bash
$ node 0-javascript_is_amazing.js 
JavaScript is amazing
```

### 1. 3 languages
**File:** `1-multi_languages.js`

Write a script that prints 3 lines:
1. "C is fun"
2. "Python is cool"
3. "JavaScript is amazing"
- Use `console.log(...)` for all output
- Do not use `var`

Example:
```bash
$ node 1-multi_languages.js 
C is fun
Python is cool
JavaScript is amazing
```

### 2. Arguments
**File:** `2-arguments.js`

Write a script that prints a message based on the number of arguments passed:
- No arguments: "No argument"
- One argument: "Argument found"
- Otherwise: "Arguments found"
- Use `console.log(...)`
- Do not use `var`
- Reference: `process.argv`

Example:
```bash
$ node 2-arguments.js 
No argument
$ node 2-arguments.js Best
Argument found
$ node 2-arguments.js Best School
Arguments found
```

### 3. Value of my argument
**File:** `3-value_argument.js`

Write a script that prints the first argument passed to it:
- If no arguments, print "No argument"
- Use `console.log(...)`
- Do not use `var`
- Do not use `length`

Example:
```bash
$ node 3-value_argument.js 
No argument
$ node 3-value_argument.js School
School
```

### 4. Create a sentence
**File:** `4-concat.js`

Write a script that prints two arguments in the format: "<arg1> is <arg2>"
- Use `console.log(...)`
- Do not use `var`

Example:
```bash
$ node 4-concat.js c cool
c is cool
$ node 4-concat.js c
c is undefined
$ node 4-concat.js
undefined is undefined
```

### 5. An Integer
**File:** `5-to_integer.js`

Write a script that prints "My number: <first argument as integer>" if convertible to integer:
- If not convertible, print "Not a number"
- Use `console.log(...)`
- Do not use `var`
- Do not use `try/catch`

Example:
```bash
$ node 5-to_integer.js 
Not a number
$ node 5-to_integer.js 89
My number: 89
$ node 5-to_integer.js "89"
My number: 89
$ node 5-to_integer.js School
Not a number
```

### 6. Loop to languages
**File:** `6-multi_languages_loop.js`

Write a script that prints 3 lines (like task 1) using an array and loop:
- Use `console.log(...)` once
- Do not use `var`
- Do not use `if/else`
- Use a loop

Example:
```bash
$ node 6-multi_languages_loop.js 
C is fun
Python is cool
JavaScript is amazing
```

### 7. I love C
**File:** `7-multi_c.js`

Write a script that prints "C is fun" x times (x = first argument):
- If not convertible to integer, print "Missing number of occurrences"
- Use only two `console.log`
- Do not use `var`
- Use a loop

Example:
```bash
$ node 7-multi_c.js 2
C is fun
C is fun
$ node 7-multi_c.js 
Missing number of occurrences
```

### 8. Square
**File:** `8-square.js`

Write a script that prints a square of size (first argument):
- If not convertible to integer, print "Missing size"
- Use character 'X'
- Use `console.log(...)`
- Do not use `var`
- Use a loop

Example:
```bash
$ node 8-square.js 2
XX
XX
$ node 8-square.js 6
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
$ node 8-square.js
Missing size
```

### 10. Factorial
**File:** `10-factorial.js`  
**Advanced**

Write a script that computes and prints a factorial:
- First argument is integer (can be cast as integer) used for computing factorial
- Factorial of NaN is 1
- Must be implemented recursively
- Must use a function
- Use `console.log(...)` for output
- Do not use `var`

Example:
```bash
$ node 10-factorial.js 
1
$ node 10-factorial.js 3
6
$ node 10-factorial.js 89
1.6507955160908452e+136
$ node 10-factorial.js 333
Infinity
```

## Requirements
- All scripts should run on Ubuntu with Node.js
- Follow all specified constraints for each task
- Files should be executable (`chmod +x` when needed)
```