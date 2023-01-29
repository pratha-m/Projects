// map filter and reduce
// what is map()?
// map method is used to create a new array from existing one 

// const nums=[1,2,3,4];

// const multiplyThree=nums.map((num,i,arr)=>{
//     return num*3;
// });
// console.log(multiplyThree);

// const moreThanTwo=nums.filter((num,i,arr)=>{
//    return num>2;
// })
// console.log(moreThanTwo);

// const sum=nums.reduce((acc,curr,i,arr)=>{
//     return acc+curr;
// },0)
// console.log(sum);


// Polyfills 

// Polyfill for map()   
// Array.prototype.myMap=function (cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// }

// const nums=[1,2,3,4];
// const multiplyThree=nums.myMap((num,i,arr)=>{
//     return num*3;
// });
// console.log(multiplyThree);


// Polyfill for filter()
// Array.prototype.myFilter=function(cb){
//       let temp=[];
//       for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             temp.push(this[i]);
//         }
//       }
//       return temp;
// }

// const nums=[1,2,3,4];
// const moreThanTwo=nums.myFilter((num,i,arr)=>{
//    return num>2;
// })
// console.log(moreThanTwo);

// Polyfill for reduce()
// Array.prototype.myReduce=function(cb,initialValue){
//       var accumulator=initialValue;
//       for(let i=0;i<this.length;i++){
//         accumulator=accumulator?cb(accumulator,this[i],i,this):this[i]; 
//       }  
//       return accumulator;
// }

// const nums=[1,2,3,4];
// const sum=nums.myReduce((acc,curr,i,arr)=>{
//     return acc+curr;
// },0)
// console.log(sum);


// Question1): map vs forEach   
