//1 Typescript va obyectlar
// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
//   }
  
//   const person: Person = {
//     name: "John Doe",
//     age: 25,
//     isStudent: false
//   };
  
//   interface Book {
//     title: string;
//     author: string;
//     publishedYear: number;
//   }
  
//   const book: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925
//   };
/** */


//2 Massivlar
// const numbers: number[] = [1, 2, 3, 4, 5];

// const sumArray = (arr: number[]): number => {
//   return arr.reduce((sum, num) => sum + num, 0);
// };

// console.log(sumArray(numbers)); // 15

// const fruits: string[] = ["apple", "banana", "cherry"];

// const toUpperCaseArray = (arr: string[]): string[] => {
//   return arr.map(str => str.toUpperCase());
// };

// console.log(toUpperCaseArray(fruits)); // ["APPLE", "BANANA", "CHERRY"]
/** */



//3 Tuplelar
// const studentRecord: [string, number, boolean] = ["Alice", 22, true];

// const coordinate: [number, number] = [10, 20];
/** */




//4 Anylar
// let variable: any;

// variable = "hello";
// variable = 42;
// variable = true;

// let anyArray: any[] = ["string", 123, false];

// anyArray.forEach(item => console.log(item));
/** */



//5 unknovn
// let unknownVar: unknown;
// unknownVar = "text";
// unknownVar = 100;

// const checkAndConvert = (value: unknown): string => {
//   if (typeof value === "string") {
//     return value;
//   } else {
//     return "Not a string";
//   }
// };

// console.log(checkAndConvert(unknownVar)); 


//5
// let unknownVar: unknown;
// unknownVar = "text";
// unknownVar = 100;

// const checkAndConvert = (value: unknown): string => {
//   if (typeof value === "string") {
//     return value;
//   } else {
//     return "Not a string";
//   }
// };

// console.log(checkAndConvert(unknownVar));


//6
// const throwError = (message: string): never => {
//     throw new Error(message);
//   };
  
//   const infiniteLoop = (): never => {
//     while (true) {}
//   };
  


//7
// const addNumbers = (a: number, b: number): number => {
//     return a + b;
//   };
  
//   console.log(addNumbers(5, 10)); // 15
  
//   const formatDate = (date: Date): string => {
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };
  
//   console.log(formatDate(new Date()));
  

//8
// enum DaysOfWeek {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
//   }
  
//   const printDay = (day: DaysOfWeek): void => {
//     console.log(DaysOfWeek[day]);
//   };
  
//   printDay(DaysOfWeek.Monday); 


//9
// interface Person {
//     name: string;
//     age: number;
//   }
  
//   interface Employee {
//     employeeId: number;
//     department: string;
//   }
  
//   type Worker = Person & Employee;
  
//   const worker: Worker = {
//     name: "Jane Doe",
//     age: 30,
//     employeeId: 12345,
//     department: "HR"
//   };


//10
// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
//   }
  
//   interface Car extends Vehicle {
//     numberOfDoors: number;
//     isElectric: boolean;
//   }
  
//   const car: Car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2024,
//     numberOfDoors: 4,
//     isElectric: true
//   };
  
  
//11
// type Address = {
//     street: string;
//     city: string;
//     postalCode: string;
//   };
  
//   type PersonWithAddress = Person & { address: Address };
  
//   const personWithAddress: PersonWithAddress = {
//     name: "Mark",
//     age: 28,
//     isStudent: true,
//     address: {
//       street: "Main St",
//       city: "Springfield",
//       postalCode: "12345"
//     }
//   };
  
  
//12
// interface Student {
//     name: string;
//     age: number;
//     grades: number[];
//     address: [string, number];
//   }
  
//   const getStudentSummary = (student: Student): string => {
//     const avgGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
//     return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${avgGrade.toFixed(2)}`;
//   };
  
//   const student: Student = {
//     name: "Alice",
//     age: 20,
//     grades: [90, 85, 88],
//     address: ["Maple St", 123]
//   };
  
//   console.log(getStudentSummary(student)); 
  

//13
// enum OrderStatus {
//     Pending,
//     Shipped,
//     Delivered,
//     Cancelled
//   }
  
//   interface Order {
//     orderId: number;
//     status: OrderStatus;
//     totalAmount: number;
//   }
  
//   interface Customer {
//     customerId: number;
//     name: string;
//   }
  
//   type CustomerOrder = Order & Customer;
  
//   const customerOrder: CustomerOrder = {
//     orderId: 456,
//     status: OrderStatus.Shipped,
//     totalAmount: 150.0,
//     customerId: 789,
//     name: "Sarah"
//   };
  