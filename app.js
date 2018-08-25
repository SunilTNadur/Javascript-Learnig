//Console tutorial 

//console.log("Hello");
// console.log(123);
// console.log(true);
// console.log([1,2,3,4]);
// var greeting = 'Hello Sunil ';
// console.log(greeting);
//  console.log({a1:'Sunil',a2:'chinni'});
//  console.table({a1:'Sunil',a2:'chinni'});
//  console.error("Error");
//  console.time('Hello');
//  console.log({a1:'Sunil',a2:'chinni'});
//  console.log({a1:'Sunil',a2:'chinni'});
//  console.log({a1:'Sunil',a2:'chinni'});
//  console.log({a1:'Sunil',a2:'chinni'});
//  console.log({a1:'Sunil',a2:'chinni'});
//  console.log({a1:'Sunil',a2:'chinni'});
//  console.timeEnd('Hello');
//  console.warn('Warn');
//  console.info('Info');
//  //console.clear();
//  console.exception();

// Vaiables 
//  var  name;
//  console.log(name);

//  let name=123;
//  console.log(name);

//  let array = [1,2,3,4,5,6];
//  console.log(array.push(10));
//  console.log(array);

// const array = ["Sunil","manoj","chinni","amma"];
// console.log(array);
// array =[1,2,3,4];

//Data Type ---Two Types 

//Primitive types --Directly access
//User typeof operator to know data type
            //String 
    // var  name ="Sunil";
    // console.log(typeof name);
            // Number
        // var age =12;
        // console.log(typeof age);
            // Boolean
            // var hasAte=true;
            // console.log(typeof hasAte);
            // undefined
            // var firstName;
            // console.log(typeof firstName);

            // null
            // let name = null;
            // console.log(typeof name);

            // Symbol

            // let sym =  Symbol();
            // console.log(sym);

            //REFERENCE TYPES

            // Array

            // const array = [1,1,1,1,1];
            // console.log(typeof array);

            // Object Literal

            // const person = {
            //         name:"Sunil",
            //         age:25
            // }
            // console.log(person);
            // console.log(typeof person);

            //Date 

            // var today = new Date();
            // console.log(today);
            // console.log(typeof today);

            //Type Conversion 

//             let val = 5;

//             //To String 

//           //  Number to string 
//           val = String(val);

//           //boolean to string 
//           val = String(true);

//           //array to String 
//           val = String([1,2,3,4]);

//           //date to String 
//           val = String(new Date());

//         //using toString()
//             val = (5).toString();

//             val = (true).toString();


// //To Number
//         //String to Number
//           val = Number('5');

//           val = parseInt('5.21');
//           val = parseFloat('5.20');

//           //Boolean to Number 
//           val = Number(true); //1
//           val = Number(false);//0
//           val = Number(null);//0

//           //Array to Number 

//           //val = Number([1,2,3,4]);

//           //Date to Number

//           //val = Number(new Date()); don't do this 
          
//         //   console.log(val);
//         //   console.log(typeof val);
//         //  // console.log(val.length);
//         //  console.log(val.toFixed(2));

// //Math object 

//         const num1 = 100;
//         const num2 = 50;
//         let sum ;

//     //Basic arithmatic operations 
//         sum = num1 + num2;//150
//         sum = num1 - num2;//50
//         sum = num1 * num2;//5000
//         sum = num1 / num2;//2
//         sum = num1 % num2;//0
       
//         sum = Math.PI;
//     //Math.round(x)
//         sum = Math.round(2.4);//2
//         sum = Math.round(2.5);//3
//         sum = Math.round(2.8);//3

//     //Math.ceil(x)
//         sum = Math.ceil(2.3);//3

//     //Math.floor(x)
//         sum = Math.floor(2.8);//2

//     //Math.sqrt(x);
//         sum = Math.sqrt(64);//8
//     //Math.pow(x,y)
//         sum = Math.pow(3,2);//9

//     //Math.random()
//         sum = Math.floor((Math.random()*20+1));
//         console.log(sum);

//String Object and its functions
 
const firstName = 'William';
const lastName = 'Johnson';
const age = 25;
let val;

//concatination of strings
val = firstName +'  ' +lastName;

val = 'Hi there, I am  ' + firstName + 'My age is  ' + age + 'years'; 

val = 'sunil ';
val += 'sidda';


console.log(val);

