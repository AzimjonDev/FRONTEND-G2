// const obj={
//     name:"Arslonbek",
//     age:21,
//     run:function(){
//       console.log(`  ${this.name}ning yoshi ${this.age} da va u dasturchi `);
//     }
// }


// obj.run()
 
//  HM_0001 = [10, 20, 30]
//  HM_0002 = [10, 50, 30]
 
// const a = [10, 20, 30]; // SM_a_001 = HM_0001
// const b = [a]; // SM_b_002 = HM_0002
// b[1] = 50; // HM_0002[1]  = 50
// console.log(a); // HM_0001
// console.log(b); // HM_00

 const a = [10, [20, 40], 30]; // SM_a_001 =

const b = [a]; // SM_b_002 = HM_0003 =
b[1] = [a[1]]; // HM_0002[0] = 50

console.log(b);

