// // console.log("Hello world");
// // var a = 10;
// // var b= "20";
// // console.log(a==b);
// var name="sonu";
// var name="bommi";
// console.log(name);
// function greet(){
//     var a=10;
//     console.log(a);
// }
// console.log("hi");
// console.log("hi");

// if(true){
//     let a=20;
// }
// console.log(a);
// let a=10;
// let a=20;
// console.log(a);

// const b=2000000000;
// const b=2778728
// console.log(b)

// if (true) {
//     const a=10;
// }
// consle.log(a);


// const n1=10;
// const n2=20;
// const n3=30;

// if (n1>n2 && n1>n3) {
//     console.log("n1 is greatest");
// }
// else if (n2>n1 && n2>n3){
//     console.log("n2 is greatest");
// }
// else{
//     console.log("n3 is greatest");
// // }
 
// // const day=1
// // switch (day){
// //     case 1:
// //         console.log("monday")
// //     case 2:
// //         console.log("tuesday")

// // }
// // for (let i=1 ; i<=5; i++){
// //     console.log(i)
// // }
// // i=1
// // while (i>5){
// //     console.log(i)
// // 
// let a= [1,2,3]
// console.log(a)
// for (let name of a){
//     console.log(name)
// }

// const obj={
//     name:"sonu",
//     age:20,
//     weight:50
// }
// for(let  name in obj){
//     console.log(obj[name])
// }


// const obj2=[
//     {
//     name:"samsung",
//     disc:"stylish pne",
//     price:50000
//     },
    
//     {
//     name:"samsung",
//     disc:"stylish pne",
//     price:50000
//     },
    
//     {
//     name:"samsung",
//     disc:"stylish pne",
//     price:50000
//     }
// ]
// for (let mobile of obj2){
//     for(let d in mobile){
//     console.log(obj2[d])
// // }
// // }
// greet()
// function greet(){
//     console.log("Hello World")
// }
// greet()
// sendoff()

// const sendoff= function(){
//     console.log("bye bye world")

// }
// sendoff()

// const backend=() =>{
//     console.log("backend")
// }
// backend()

// const fullstack=()=>{
//     console.log("we need to wirte return")
// }

//call back function- a function is acting like a parameter to the other function

const higherorderfunction=(a)=>{
    console.log("you are in hdf")
}
const calbackfunction=()=>{
    console.log("i am in call back function")
}
 higherorderfunction(calbackfunction)

 //A function which calls the other function as a parameter is higher order function
 //A function which has been called is known as callbackfunction
#
 
 const arr=[1,2,3,4]
 const arr2 = arr.map(num => num * 2)
 console.log(arr2)
 
