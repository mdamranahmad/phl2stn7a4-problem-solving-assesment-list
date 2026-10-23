var gradingStudents = (grades) => {
    return grades.map((grade) => {
        if (grade < 38) return grade;
        if (grade % 5 && grade % 5 >= 3) {
            return grade + 5 - (grade % 5);
        }
        return grade;
    });
};

var gradeArray = [73, 67, 38, 33];
// var gradeArray = [84, 29, 57];

const finalGrade = gradingStudents(gradeArray);

console.log("gradeArray: ", gradeArray);
console.log("finalGrade: ", finalGrade);
