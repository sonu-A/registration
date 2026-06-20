// // // console.log("Hello world");
// // // var a = 10;
// // // var b= "20";
// // // console.log(a==b);
// // var name="sonu";
// // var name="bommi";
// // console.log(name);
// // function greet(){
// //     var a=10;
// //     console.log(a);
// // }
// // console.log("hi");
// // console.log("hi");

// // if(true){
// //     let a=20;
// // }
// // console.log(a);
// // let a=10;
// // let a=20;
// // console.log(a);

// // const b=2000000000;
// // const b=2778728
// // console.log(b)

// // if (true) {
// //     const a=10;
// // }
// // consle.log(a);


// // const n1=10;
// // const n2=20;
// // const n3=30;

// // if (n1>n2 && n1>n3) {
// //     console.log("n1 is greatest");
// // }
// // else if (n2>n1 && n2>n3){
// //     console.log("n2 is greatest");
// // }
// // else{
// //     console.log("n3 is greatest");
// // // }
 
// // // const day=1
// // // switch (day){
// // //     case 1:
// // //         console.log("monday")
// // //     case 2:
// // //         console.log("tuesday")

// // // }
// // // for (let i=1 ; i<=5; i++){
// // //     console.log(i)
// // // }
// // // i=1
// // // while (i>5){
// // //     console.log(i)
// // // 
// // let a= [1,2,3]
// // console.log(a)
// // for (let name of a){
// //     console.log(name)
// // }

// // const obj={
// //     name:"sonu",
// //     age:20,
// //     weight:50
// // }
// // for(let  name in obj){
// //     console.log(obj[name])
// // }


// // const obj2=[
// //     {
// //     name:"samsung",
// //     disc:"stylish pne",
// //     price:50000
// //     },
    
// //     {
// //     name:"samsung",
// //     disc:"stylish pne",
// //     price:50000
// //     },
    
// //     {
// //     name:"samsung",
// //     disc:"stylish pne",
// //     price:50000
// //     }
// // ]
// // for (let mobile of obj2){
// //     for(let d in mobile){
// //     console.log(obj2[d])
// // // }
// // // }
// // greet()
// // function greet(){
// //     console.log("Hello World")
// // }
// // greet()
// // sendoff()

// // const sendoff= function(){
// //     console.log("bye bye world")

// // }
// // sendoff()

// // const backend=() =>{
// //     console.log("backend")
// // }
// // backend()

// // const fullstack=()=>{
// //     console.log("we need to wirte return")
// // }

// //call back function- a function is acting like a parameter to the other function

// // const higherorderfunction=(a)=>{
// //     console.log("you are in hdf")
// // }
// // const calbackfunction=()=>{
// //     console.log("i am in call back function")
// // }
// //  higherorderfunction(calbackfunction)

// //  //A function which calls the other function as a parameter is higher order function
// //  //A function which has been called is known as callbackfunction
// // #
 
// //  const arr=[1,2,3,4]
// //  const arr2 = arr.map(num => num * 2)
// //  console.log(arr2)

// const arr=["sonu", "abhi"]
// arr.push(2,3)
// console.log(arr)


// console.log(arr.pop() )//remove last element
// console.log(arr)

// arr.unshift("ninnduu")
// console.log(arr)

// arr.shift()
// console.log(arr)
// console.log(arr.shift)

// arr.splice(0,2)
// console.log(arr)
// arr.unshift("karthik")
// arr.push("karthik")

// console.log(arr)
// arr.shift("karthik")
// console.log(arr)

// const arr2=[1,2,3,"anu","anusri","anushna"]
// console.log(arr2.indexOf(1)) 
// console.log(arr2.indexOf(10)) //if element is not found it returns -1

// const arr=[
//     {
//         name:"sonu",
//         rollno:24,
//         dept:"mech"


//     },
//      {
//         name:"ravi",
//         rollno:25,
//         dept:"mech"


//     },
//      {
//         name:"bhai",
//         rollno:26,
//         dept:"mech"


//     }
// ]
// console.log(arr)

// const arr2 =arr.find(sss=>sss.name=="bhai")

// console.log(arr2)

// console.log("  ")

// arr.forEach(element => {
//     console.log(element)      //foreach method is used to take each element from arr
// });

// arr.map(student=>console.log(student.name))


// const arrx=[2,50,80]
// arrx.map(student=>console.log(student+5))


// marks=[2,3,4,5,6,7,8]
// marks.filter(mark=>console.log(mark>5))



// const ar=[
//     {
//         name:"sonu",
//         rollno:24,
//         dept:"mech"


//     },
//      {
//         name:"ravi",
//         rollno:25,
//         dept:"mech"


//     },
//      {
//         name:"bhai",
//         rollno:26,
//         dept:"mech"


//     }
// ]


// const filter_d=ar.filter(k=>k.rollno==25)
// console.log(filter_d)



// const testing=[3,4,5,6,7,8,9]
// const g =testing.filter(ele=> ele>5)
// console.log(g)


// const jk=[2,35,45,55,65,75]
// const kj=jk.reduce((sum,current) => sum+sub,0)
// console.log(kj)


const r=[20,253333,350]
r.sort((a,b)=> a-b)
console.log(r)








 
 
