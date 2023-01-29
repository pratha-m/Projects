// var vs let vs const   
// #1) SCOPE   
// var-->functional scope 
// let,const-->block scope   
// let-->can't be re declare as var or const 
// const-->can't be re declare as var or let  


// function name(params) {
   // **function Scope** //
// }
    
// {
    //**block Scope**//
// }
        

// var     
// {
//     var a=5;
// }
// console.log(a);

// let   
// {
//     let b=5;
// }
// console.log(b);

// const   
// {
//     const c=5;
// }
// console.log(c);

// variable shadowing 
// function test(){
//     let a="Hello";
//     if(true){
//         let a="Hi";
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

// function test(){
//     var a="Hello";
//     if(true){
//         let a="Hi";
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

// function test(){
//     let b="bye";
//     if(true){
//         var b="GoodBye";
//         console.log(b);
//     }
// }
// test();

// #2)DECLARATION
// let-->can't be re declare in same scope
// const-->can't be re declare in same scope  
// var-->can be re declare in same scope   

// var a;
// var a;

// let a;
// let a;

// const a;
// const a;

// declaration without initialization 
// var-->can be declare without initialization 
// let-->can be declare without initialization 
// const-->can't be declare without initialization 

// var a;

// let a;

// const a;

// Re-initialization 
// var,let-->can be Re-initialize 
// const-->can't be Re-initialize 

// var a=5;
// a=6;

// let a=5;
// a=6;

// const a=5;
// a=6;

//*** Hoisting ****  
// tempral dead zone-->time bw declaration and initialization of let and const variables
// const,let-->hoisted in tempral dead Zone 
// var-->hoisted in global 

// var    

// console.log(count);
// var count=1;

// console.log(a);
// var count=1;

// var count;
// console.log(count);
// count=2;


// let   
// console.log(count);
// let count=1;

// q1)
// function abc(){
//     console.log(a);
//     var a=10;
// }
// abc();

function abc(){
    console.log(a,b,c);

    const c=30;
    let b=20;
    var a=10;
}
abc();