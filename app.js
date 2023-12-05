// console.log("Lesson-32");

// ------ Type Conversion
// -------- Number to String
// var a = "202020202";
// var b = "20";
// console.log(String(a));
// console.log(a.toString());
// console.log(`${a}`);
// console.log(a);
// console.log(b);

// -------- String to Number

/// Operation (+)
let a = 20;
let b = a + a + 40 + "20" + (a + a) + String(a); // 80204020

console.log(a);
console.log(b);



// var a = "202020202";
// console.log(Number(a));
// console.log(parseInt(a));
// console.log(+a);
// console.log(a);

// -------- Boolean to Number
// var a = false;
// console.log(Number(a));
// console.log(+a);
// console.log(a);
// -------- Boolean to String
// let a = false;
// console.log(String(a));
// console.log(`${a}`);
// console.log(a.toString());

// -------- String to Boolean
// let a = "";

// console.log(Boolean("Arslonbek"));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(a));
// console.log(!true);

// ----- Type Coercion
/// Operation (+)
// let a = 20;
// let b = a + a + 40 + "20" + (a + a) + String(a); // 80204020

// 80204020// console.log(b);

/// Operation (-)
// let a = 30;
// // let b = Number("20") - a;

// console.log(typeof NaN);

// console.log(a);
// console.log(b);

// console.log("10" + 1);
// console.log(10 + 1);
// console.log("10" - 1);

//------ (==) vs (===)
// let a = 20;
// let b = "20";
// console.log(a == b);
// console.log(a === b);

// Boolean Logic

// const result = (true && 7 && "arslonbek") || (false && true) || "boburbek";
// console.log(result);

// let numbers = [20, 13, 44, 15];
// let index = 4;
// let a = numbers[index] || ("arslonbek" && numbers[index]) || "Boburbek";
// console.log(a);