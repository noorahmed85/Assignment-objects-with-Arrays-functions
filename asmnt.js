// Assignment 1: Building Your Friend List //
// 2.. create an array named students
const students = [
    { name: "noor ahmed", senior: true, assignmentsCompleted: "not now" },
    { name: "hasan", senior: "yes", assignmentsCompleted: true },
    { name: "ali", senior: "false", assignmentsCompleted: false },
];
// 3.. function to find senior student who completed their assignment
function findSeniorStudentWithAssignments(students) {
    return students.filter(student => student.senior && student.assignmentsCompleted);
}
;
// 4.. function to update th class list by removing studnts who haven't compltd assignment
function updateClassList(students) {
    return students.filter(student => student.assignmentsCompleted);
}
;
// now find seb=nior studnt with assignment
const seniorStudentWithAssignments = findSeniorStudentWithAssignments(students);
console.log(`senior students who have completed their assignments:`, seniorStudentWithAssignments);
// update th class list
const updatedClassList = updateClassList(students);
console.log(`updatedClassList:`, updatedClassList);
export {};
