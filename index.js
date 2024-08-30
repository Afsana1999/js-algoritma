"use strict";

// let students = [
//   { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

//   { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

//   { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

//   { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

//   { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

//   { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

//   { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

//   { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

//   { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 },
// ];

// function filterWithCallback(array, callback) {
//   let filteredValues = [];

//   array.forEach((item, index) => {
//     if (callback(item, index)) {
//       filteredValues.push(item);
//     }
//   });

//   return filteredValues;
// }

// //2. students arrayində indeksi cüt olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// const result = filterWithCallback(students, (_, index) => index % 2 === 1);

// console.log(result);

// // 3.  students arrayində id-i tək olan tələbələrin adlarını consolda yazdırın.
// students
//   .filter((student) => student.id % 2 === 1)
//   .forEach((student) => console.log(student.name));

// // 4. students arrayinda yaşı 20+ olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// const olderThan20 = students.filter((student) => student.age > 20);
// console.log(olderThan20);

// //5. students arrayinda id-i cüt və grade-i 90+ olan tələbələri  yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// const evenIdGrade = students.filter(
//   (student) => student.id % 2 === 0 && student.grade > 90
// );
// console.log(evenIdGrade);

// //6.  students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını yeni arrayə əlavə edib,
// const gradePlus100and95 = students.filter(
//   (student) => student.grade == 100 || student.grade == 95
// );
// console.log(gradePlus100and95);

// //7. istifadəçi bir ədəd (A) daxil edir. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin
// let a = +prompt(
//   "eded daxil et, 1-den 1000-e qeder bolunduyu butun ededleri tapim))"
// );
// function printDivisibles() {
//   for (let i = 1; i <= 1000; i++) {
//     if (i % a == 0) {
//       console.log(i);
//     }
//   }
// }
// printDivisibles();

// //8.İstifadəçi bir müsbət ədəd (N) daxil edir. Fibonaççi seriyasının N-ci nömrəsini çap edən funksiya yazın.
// function fibonacci(N) {
//   if (N <= 0) return "N müsbət ədəd olmalıdır";
//   if (N === 1) return 0;
//   if (N === 2) return 1;

//   let a = 0;
//   let b = 1;
//   let next;

//   for (let i = 3; i <= N; i++) {
//     next = a + b;
//     a = b;
//     b = next;
//   }

//   return b;
// }

// const N = parseInt(prompt("Bir müsbət ədəd daxil edin:"));

// if (!isNaN(N) && N > 0) {
//   console.log(`Fibonacci seriyasının ${N}ci nömrəsi: ${fibonacci(N)}`);
// } else {
//   console.log("Düzgün bir müsbət ədəd daxil edin.");
// }


