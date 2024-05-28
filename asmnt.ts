// Assignment 1: Building Your Friend List //


// type Friends = [
//     firstName: string,
//     lastName: String,
//     id?: number,
// ];

// const people = {
//     friend: []
// };

// let friend = {
//     firstName: "Hasan",
//     lastName: "Ali Khan",
// }

// let friend1 = {
//     firstName: "Haider",
//     lastName: "Ali",
//     id: 1120,
// }
// console.log("people", "friend" ,friend ,"friend1",friend1);

//=============Assignment 2:Manipulating an Array: Rearranging Words================\\
 
// const scrambledArray = ["student","of",true,123,"am","a","GIAIC","I"];

// scrambledArray.splice(2,3);
// scrambledArray.unshift("I","am","a");
// scrambledArray.pop();
// scrambledArray.pop();
// scrambledArray.pop();
// scrambledArray.push("GIAIC");

// let responce = scrambledArray.join(" ");
// console.log(responce);                   // shift used for end of strtng element
                                               // unshift used for add strtng element
                                               // splice used for end center elememts
                                               // pop used for end last element
                                               // push used for add element on th last

// //_________________ Assignment 3: Company Product Catalog _________________\\
// // define th invmtry array
// let inventory = [];
// // define types of products addition
// type Products = {
//     name: string , model: string | number, cost?: number, quantity: number
// };

// // create product object
// let products =  {
//     name: "samsung", model: "x55", cost: 75000, quantity: 10
// };

// let products1 = {
//     name: "Dell", model: "D540", quantity: 2
// };


// let  products2 = {
//     name: "Honda", model: 2024, cost: 100000, quantity: 1
// };

// // Add products to the inventory array
// inventory.push(products);
// inventory.push(products1);
// inventory.push(products2);

// // Display product information
//     console.log(inventory);

//_________________ Assignment 4: Student List Organizer _________________\\
// 1.. define th studnt interface
interface Student {
    name: string,
    senior: boolean | string,
    assignmentsCompleted?: boolean | string,
}

// 2.. create an array named students
const students: Student [] =  [
   {name: "noor ahmed",senior: true, assignmentsCompleted: "not now"},
   {name: "hasan",senior: "yes", assignmentsCompleted: true},
   {name: "ali",senior: "false", assignmentsCompleted: false},
];
// 3.. function to find senior student who completed their assignment
function findSeniorStudentWithAssignments(students: Student[]): Student [] {
        return students.filter(student => student.senior && student.assignmentsCompleted);
}; 
// 4.. function to update th class list by removing studnts who haven't compltd assignment
function updateClassList(students: Student[]): Student [] {
    return students.filter(student => student.assignmentsCompleted);
};
// now find seb=nior studnt with assignment
const seniorStudentWithAssignments = findSeniorStudentWithAssignments(students);
console.log(`senior students who have completed their assignments:`,seniorStudentWithAssignments);
// update th class list
const updatedClassList = updateClassList(students);
console.log(`updatedClassList:`, updatedClassList);
