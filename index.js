// const obj = {
    //     name: "Arslonbek",
    //     age: 21,
    //     run: function () {
        //         console.log(`${this.name}ning yoshi ${this.age} da va u dasturchi`);
        //     }
        // }
        
        // console.log(obj.job="Devoloper");
// console.log(obj.name = "NewLastName");
// console.log(obj.age=19);
// console.log(obj.name);
// console.log(obj.age);
// obj.name="Sardorbek"
// console.log(obj.name);

// const obj = {
//         name: "Arslonbek",
//         age: 21,
//         run: function () {
//             console.log(`${this.name}ning yoshi ${this.age} da va u dasturchi`);
//         }
//     }
//   delete obj.age
//   delete obj.name
//   delete obj.run
//   console.log( "obj.name:",obj.name);
//   console.log("obj.age:",  obj.age);
//   console.log( "obj.run: ",obj.run);

// const obj = {
//     name: "Arslonbek",
//     age: 21,
//     run: function () {
//         console.log(`${this.name}ning yoshi ${this.age} da va u dasturchi`);
//     }
// };


// // Object.freeze(obj)

// delete obj.age;
// obj.name="Jamshidbek"
// console.log(obj.name);
// console.log(obj.age);
// console.log();

// const obj = { //0001
//     name: "Arslonbek",
//     age: 21,
//     run: function () {
//         console.log(`${this.name}ning yoshi ${this.age} da va u dasturchi`);
//     }
// };

// const obj1 = { //0002
//     name: "Arslonbek",
//     age: 21,
//     run: function () {
//         console.log(`${this.name}ning yoshi ${this.age} da va u dasturchi`);
//     }
// };



// console.log(obj==obj1);
// console.log(obj==obj1);
// console.log(obj.name === obj1.name && obj.age === obj1.age);


// const obj = { 
//     name: "Arslonbek",
//     age: 21,

//     person:{
//       job:"devoloper",
//       isMarred:false
//     },
//     run: function () {
//         console.log(`${this.name}ning yoshi ${this.age} da va u dasturchi`);
//     }
// }
// // const {name,age,person:{job,isMarred}}=obj

// // console.log(job);

// let a=2
// let b=a
// b=6
// console.log("a:",a);
// console.log("b:",b);


// const person={
//     ism:"Boburbek",
//     yosh:18
// }

// const yangiIsm=person

// yangiIsm.ism="Umidjon"

// yangiIsm.yosh=17

// console.log("person:",person);
// console.log("yangiIsm:",yangiIsm);

// // rest operatori
// let[bir,...res]=[1,2,3,4,5  ]
// console.log(res);


// const arr=[
// ]

// arr.push({name:"Arslonbek",age:21},{ism:"Boburbek",yosh:23})

// console.log(arr.length);
 
let a = [1, 2, 4];//_HM 0001
let b = [...a]; //_HM 0002



b[2] = 5;
a[1]=9
console.log("a:", a); // a: [1, 2, 3]
console.log("b:", b); // b: [1, 5, 3]);
console.log("a",a );

