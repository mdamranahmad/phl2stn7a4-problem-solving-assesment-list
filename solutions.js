// # **Problem 1: Staircase**
// ## **Problem Description**
// You are given an integer n, representing the height of a staircase. Your task is to construct a right-aligned staircase using the \# character and spaces.
// The staircase must contain exactly n rows. Each row should contain the appropriate number of leading spaces followed by \# characters. The first row contains one \#, and each subsequent row contains one additional \# until the final row contains n characters.
// Each row must be separated by a newline character (\\n). Do not include unnecessary spaces at the end of any row.

// SOLUTION-01:

var staircase = (n) => {
    let init = "";
    for (let i = 0; i < n; i++) {
        init += "#";
        console.log(init);
    }
};

staircase(7);

// OR SOLUTION-01 (ALTERNATIVE)
var staircase = (n) => {
    let spaces = "";
    let hash = "";
    for (i = 0; i < n; i++) {
        spaces = " ".repeat(n - i);
        hash = "#".repeat(i + 1);
        console.log(spaces + hash);
    }
};

staircase(10);

// Result-01:
/*
          #
         ##
        ###
       ####
      #####
     ######
    #######
   ########
  #########
 ##########
*/

// Problem 2: Grading Students
// Problem Description
// A teacher has assigned grades to a group of students. The grading system allows grades to be rounded according to the following rules:
// If a grade is less than 38, it remains unchanged because it is below the minimum passing grade.
// If the difference between the grade and the next multiple of 5 is less than 3, round the grade up to that next multiple of 5.
// Otherwise, keep the original grade unchanged.
// Given an array of student grades, return a new array containing the final grades after applying these rules independently to each student.

// Solution-02:

var gradingStudents = (grades) => {
    return grades.map((grade) => {
        if (grade < 38) return grade;
        if (grade % 5 && grade % 5 >= 3) {
            return grade + 5 - (grade % 5);
        }
        return grade;
    });
};

// var gradeArray = [73, 67, 38, 33];
var gradeArray = [84, 29, 57];

const finalGrade = gradingStudents(gradeArray);

console.log("gradeArray: ", gradeArray);
console.log("finalGrade: ", finalGrade);

// Output-02:
/**
gradeArray:  [ 73, 67, 38, 33 ]
finalGrade:  [ 75, 67, 40, 33 ]

gradeArray:  [ 84, 29, 57 ]
finalGrade:  [ 85, 29, 57 ]
 */

// Problem 3: Time Conversion
// Problem Description
// You are given a time string in 12-hour clock format, including hours, minutes, seconds, and an AM/PM suffix.
// Convert the given time into its equivalent 24-hour clock format.
// The 24-hour format uses hours from 00 through 23 and does not include an AM/PM suffix.
// Remember the following special cases:
// 12:xx:xxAM becomes 00:xx:xx.
// 12:xx:xxPM remains 12:xx:xx.
// Any other PM hour must be increased by 12.
// Other AM hours remain unchanged.
// Return the converted time as a string in HH:MM:SS format.

// Solution-03:

var timeConversion = (time) => {
    var [hr, min, secwampm] = time.split(":");
    var sec = secwampm.slice(0, 2);
    var [, suffix] = secwampm.split(sec);

    if (suffix.toUpperCase() === "AM") {
        return hr === "12" ? `00:${min}:${sec}` : `${hr}:${min}:${sec}`;
    } else {
        return hr === "12"
            ? `12:${min}:${sec}`
            : `${12 + Number(hr)}:${min}:${sec}`;
    }
};

// var s = "07:05:45PM";
// var s = "12:00:00AM"
var s = "12:30:45PM";

const convertedTime = timeConversion(s);

console.log("Input: ", s);
console.log("convertedTime: ", convertedTime);

// Output-03:
/**
Input:  07:05:45PM
convertedTime:  19:05:45

Input:  12:00:00AM
convertedTime:  00:00:00

Input:  12:30:45PM
convertedTime:  12:30:45
 */

// Problem 4: String Repeat
// Problem Description
// Given a non-negative integer n and a string s, return a new string formed by repeating s exactly n times.
// The resulting string must preserve the original order of the characters in s. If n is zero, return an empty string.
// You may use built-in string methods or implement the repetition using a loop.

// Solution-04:

var repeatStr = (n, s) => {
    return s.repeat(n);
};

var num = 4;

var str = "a";

var repeatedStr = repeatStr(num, str);

console.log(`n = ${num}, s = ${str}`);
console.log("repeatedStr: ", repeatedStr);

// Solution-04 (Alternative):

var repeatStr = (n, s) => {
    if (n === 0) return "";
    for (let i = 0; i < n; i++) return (s += s);
};

var num = 0;

var str = "hello";

var repeatedStr = repeatStr(num, str);

console.log(`n = ${num}, s = ${str}`);
console.log("repeatedStr: ", repeatedStr);

// Output-04:
/**
n = 3, s = ha
repeatedStr:  hahaha

n = 0, s = hello
repeatedStr:

n = 4, s = a
repeatedStr:  aaaa
 */

// Problem 5: Reversed Strings
// Problem Description
// Given a string str, return a new string containing the same characters in reverse order.
// The first character of the original string must become the last character of the result, and the last character of the original string must become the first character.
// The original string must not be modified. An empty string should return an empty string.

// Solution-05:

var solution = (str) => {
    var strArr = str.split("");

    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
        newArr.push(strArr[strArr.length - 1 - i]);
    }

    return newArr.join("");
};

var inpStr = "";
var revStr = solution(inpStr);

console.log("inpStr: ", inpStr);
console.log("revStr: ", revStr);

// Output-05:
/**
inpStr:  world
revStr:  dlrow

inpStr:  hello
revStr:  olleh

inpStr:
revStr:
 */

// Problem 6: Sum of Positive
// Problem Description
// Given an array of integers, calculate the sum of all positive numbers in the array.
// A positive number is any number strictly greater than zero. Ignore zero and all negative numbers.
// If the array contains no positive numbers or is empty, return 0.

// Solution-06:
var positiveSum = (arr) => {
    var sum = 0;

    arr.forEach((num) => {
        if (num > 0) sum += num;
    });

    return sum;
};

// var arrNum = [1, -4, 7, 12];
// var arrNum = [-1, -2, 0, -5];
var arrNum = [];

var sumArr = positiveSum(arrNum);

console.log("arrNum: ", arrNum);
console.log("sumArr: ", sumArr);

// Output-06:
/**
arrNum:  [ 1, -4, 7, 12 ]
sumArr:  20

arrNum:  [ -1, -2, 0, -5 ]
sumArr:  0
 */

// Problem 7: Grasshopper — Summation
// Problem Description
// Given a positive integer num, calculate the sum of all integers from 1 through num, inclusive.
// For example, when num = 4, the required sum is:
// [
// 1 + 2 + 3 + 4 = 10
// ]
// Return the calculated sum as an integer.
// Consider an iterative solution and the mathematical formula for the sum of consecutive positive integers.

// Solution-07:
var summation = (num) => {
    if (num < 0) return "Negative integer given!";
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }

    return sum;
};

// var num = 5;
// var num = 8;
var num = 1;

var sumNum = summation(num);

console.log("num: ", num, " sumNum: ", sumNum);

// Output-07:
/**
 * num:  8  sumNum:  36
 * num:  1  sumNum:  1
 */

// Problem 8: Convert a Boolean to a String
// Problem Description
// Given a Boolean value b, convert it into its corresponding string representation.
// If b is true, return the string "true". If b is false, return the string "false".
// The return value must be a string, not a Boolean.

// Solution-08:

var booleanToString = (b) => {
    if (b) {
        return "true";
    } else return "false";
};

var str01 = booleanToString(true);
var str02 = booleanToString(false);

console.log("str01: ", str01, " typeof: ", typeof str01);
console.log("str02: ", str02, " typeof: ", typeof str02);

// Output-08:
/*
str01:  true  typeof:  string
str02:  false  typeof:  string
 */

// Problem 9: Fizz Buzz
// Problem Description
// Given an integer n, generate a sequence of strings representing the integers from 1 through n.
// For each integer i, apply the following rules in order:
// If i is divisible by both 3 and 5, use "FizzBuzz".
// If i is divisible by 3 only, use "Fizz".
// If i is divisible by 5 only, use "Buzz".
// Otherwise, use the decimal string representation of i.
// Return an array containing exactly n strings in the same order as the integers.
// Important: Check divisibility by both 3 and 5 before checking either one individually.

// Solution-09:
var fizzBuzz = (n) => {
    var arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(
            !(i % 3) && !(i % 5)
                ? "FizzBuzz"
                : !(i % 3)
                  ? "Fizz"
                  : !(i % 5)
                    ? "Buzz"
                    : `${i}`,
        );
    }
    return arr;
};

// var n = 5;
var n = 15;

var output = fizzBuzz(n);

console.log("n: ", n);
console.log("output: ", output);

// Output-09:
/**
n:  5
output:  [ '1', '2', 'Fizz', '4', 'Buzz' ]

n:  15
output:  [
  '1',        '2',
  'Fizz',     '4',
  'Buzz',     'Fizz',
  '7',        '8',
  'Fizz',     'Buzz',
  '11',       'Fizz',
  '13',       '14',
  'FizzBuzz'
]
 */

// Problem 10: Running Sum of 1D Array
// Problem Description
// Given an array of integers nums, calculate its running sum.
// The running sum at index i is the sum of all elements from index 0 through index i, inclusive.
// Formally:
// [
// runningSum[i] = \sum_{j=0}^{i} nums[j]
// ]
// Return a new array containing the running sum at every index.

// Solution-10:
var runningSum = (nums) => {
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums.slice(0, i + 1));
    }
    return arr.map((values) => {
        let sum = 0;
        for (let j = 0; j < values.length; j++) {
            sum += values[j];
        }
        return sum;
    });
};

// var nums = [1, 2, 3, 4];
var nums = [1, 1, 1, 1, 1];

var output = runningSum(nums);

console.log("nums: ", nums);
console.log("output: ", output);

// Output-10:
/**

nums:  [ 1, 2, 3, 4 ]
output:  [ 1, 3, 6, 10 ]

nums:  [ 1, 1, 1, 1, 1 ]
output:  [ 1, 2, 3, 4, 5 ]

 */
