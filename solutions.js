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

// Output-07:
/**
arrNum:  [ 1, -4, 7, 12 ]
sumArr:  20

arrNum:  [ -1, -2, 0, -5 ]
sumArr:  0
 */
