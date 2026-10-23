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
    let spaces = ""
    let hash = ""
    for (i = 0 ; i< n; i++) {
        spaces= " ".repeat(n-i);
        hash = "#".repeat(i+1);
        console.log(spaces+hash)
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