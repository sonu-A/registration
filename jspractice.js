// // // // console.log("Hello world");
// // // // var a = 10;
// // // // var b= "20";
// // // // console.log(a==b);
// // // var name="sonu";
// // // var name="bommi";
// // // console.log(name);
// // // function greet(){
// // //     var a=10;
// // //     console.log(a);
// // // }
// // // console.log("hi");
// // // console.log("hi");

// // // if(true){
// // //     let a=20;
// // // }
// // // console.log(a);
// // // let a=10;
// // // let a=20;
// // // console.log(a);

// // // const b=2000000000;
// // // const b=2778728
// // // console.log(b)

// // // if (true) {
// // //     const a=10;
// // // }
// // // consle.log(a);


// // // const n1=10;
// // // const n2=20;
// // // const n3=30;

// // // if (n1>n2 && n1>n3) {
// // //     console.log("n1 is greatest");
// // // }
// // // else if (n2>n1 && n2>n3){
// // //     console.log("n2 is greatest");
// // // }
// // // else{
// // //     console.log("n3 is greatest");
// // // // }
 
// // // // const day=1
// // // // switch (day){
// // // //     case 1:
// // // //         console.log("monday")
// // // //     case 2:
// // // //         console.log("tuesday")

// // // // }
// // // // for (let i=1 ; i<=5; i++){
// // // //     console.log(i)
// // // // }
// // // // i=1
// // // // while (i>5){
// // // //     console.log(i)
// // // // 
// // // let a= [1,2,3]
// // // console.log(a)
// // // for (let name of a){
// // //     console.log(name)
// // // }

// // // const obj={
// // //     name:"sonu",
// // //     age:20,
// // //     weight:50
// // // }
// // // for(let  name in obj){
// // //     console.log(obj[name])
// // // }


// // // const obj2=[
// // //     {
// // //     name:"samsung",
// // //     disc:"stylish pne",
// // //     price:50000
// // //     },
    
// // //     {
// // //     name:"samsung",
// // //     disc:"stylish pne",
// // //     price:50000
// // //     },
    
// // //     {
// // //     name:"samsung",
// // //     disc:"stylish pne",
// // //     price:50000
// // //     }
// // // ]
// // // for (let mobile of obj2){
// // //     for(let d in mobile){
// // //     console.log(obj2[d])
// // // // }
// // // // }
// // // greet()
// // // function greet(){
// // //     console.log("Hello World")
// // // }
// // // greet()
// // // sendoff()

// // // const sendoff= function(){
// // //     console.log("bye bye world")

// // // }
// // // sendoff()

// // // const backend=() =>{
// // //     console.log("backend")
// // // }
// // // backend()

// // // const fullstack=()=>{
// // //     console.log("we need to wirte return")
// // // }

// // //call back function- a function is acting like a parameter to the other function

// // // const higherorderfunction=(a)=>{
// // //     console.log("you are in hdf")
// // // }
// // // const calbackfunction=()=>{
// // //     console.log("i am in call back function")
// // // }
// // //  higherorderfunction(calbackfunction)

// // //  //A function which calls the other function as a parameter is higher order function
// // //  //A function which has been called is known as callbackfunction
// // // #
 
// // //  const arr=[1,2,3,4]
// // //  const arr2 = arr.map(num => num * 2)
// // //  console.log(arr2)

// // const arr=["sonu", "abhi"]
// // arr.push(2,3)
// // console.log(arr)


// // console.log(arr.pop() )//remove last element
// // console.log(arr)

// // arr.unshift("ninnduu")
// // console.log(arr)

// // arr.shift()
// // console.log(arr)
// // console.log(arr.shift)

// // arr.splice(0,2)
// // console.log(arr)
// // arr.unshift("karthik")
// // arr.push("karthik")

// // console.log(arr)
// // arr.shift("karthik")
// // console.log(arr)

// // const arr2=[1,2,3,"anu","anusri","anushna"]
// // console.log(arr2.indexOf(1)) 
// // console.log(arr2.indexOf(10)) //if element is not found it returns -1

// // const arr=[
// //     {
// //         name:"sonu",
// //         rollno:24,
// //         dept:"mech"


// //     },
// //      {
// //         name:"ravi",
// //         rollno:25,
// //         dept:"mech"


// //     },
// //      {
// //         name:"bhai",
// //         rollno:26,
// //         dept:"mech"


// //     }
// // ]
// // console.log(arr)

// // const arr2 =arr.find(sss=>sss.name=="bhai")

// // console.log(arr2)

// // console.log("  ")

// // arr.forEach(element => {
// //     console.log(element)      //foreach method is used to take each element from arr
// // });

// // arr.map(student=>console.log(student.name))


// // const arrx=[2,50,80]
// // arrx.map(student=>console.log(student+5))


// // marks=[2,3,4,5,6,7,8]
// // marks.filter(mark=>console.log(mark>5))



// // const ar=[
// //     {
// //         name:"sonu",
// //         rollno:24,
// //         dept:"mech"


// //     },
// //      {
// //         name:"ravi",
// //         rollno:25,
// //         dept:"mech"


// //     },
// //      {
// //         name:"bhai",
// //         rollno:26,
// //         dept:"mech"


// //     }
// // ]


// // const filter_d=ar.filter(k=>k.rollno==25)
// // console.log(filter_d)



// // const testing=[3,4,5,6,7,8,9]
// // const g =testing.filter(ele=> ele>5)
// // console.log(g)


// // const jk=[2,35,45,55,65,75]
// // const kj=jk.reduce((sum,current) => sum+sub,0)
// // console.log(kj)


// // const r=[20,253333,350]
// // r.sort((a,b)=> a-b)
// // console.log(r)


// // const students = [
// //   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
// //   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
// //   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
// //   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
// //   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

// //   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
// //   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
// //   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
// //   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
// //   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

// //   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
// //   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
// //   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
// //   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
// //   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

// //   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
// //   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
// //   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
// //   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
// //   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

// //   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
// //   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
// //   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
// //   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
// //   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

// //   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
// //   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
// //   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
// //   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
// //   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// // ];



// // const passed=students.filter(a=>a.marks>=35)
// // console.log(`passed students are : ${passed.name}`)

// // const cse_dp=students.filter(b=>b.department=="CSE")
// // console.log(cse_dp)

// // const csd_dp=students.filter(b=>b.department=="CSD")
// // console.log(csd_dp)

// // const csm_dp=students.filter(b=>b.department=="CSM")
// // console.log(csm_dp)



// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];


// const placed_s= students.filter(a=>a.placed==true)
// console.log(placed_s)

// const names_packages= students.map(a=>((a.name,a.package)))
// console.log(names_packages)

// const packages= students.map((a=>a.package))
// console.log(packages)


// const ave=packages.reduce((a,b)=>(a+b),0)
// console.log(ave)

// const  sortt=packages.sort((a,b)=>a-b)
// console.log(packages)

// const  dortt=packages.sort((a,b)=>a+b)
// console.log(dortt[0])

// o=placed_s.filter(a=>a.package>10)
// console.log(o)

// n=o.map(a=>a.name)
// console.log(n)


let iscolor=false
let p=document.createElement("p")
p.innerText="like"
const con=document.getElementById("con")
con.appendChild(p)

function heartcolorchange(){
  const heart=document.getElementById("heart")
if(iscolor==false){
  heart.src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L2FyLXNldC0wOTA3MjQtYW0tMDMtMDAyLTEucG5n.png"
  iscolor=true
}
else{
  heart.src="https://tse3.mm.bing.net/th/id/OIP.JB0dYEWKKHCYxSlJIAl9DQHaIr?rs=1&pid=ImgDetMain&o=7&rm=3", alt="heart"
  iscolor=false
}
}



 
 
