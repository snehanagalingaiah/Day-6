//Ques-1: Fix the code to get the largest of three.

 const aa = (f,s,t) => {
   // let f,s,t;
    console.log("Ques-1 Finding the highest in", f,s,t);
    if(f>s &&f>t){
    console.log("the highest number is", f)}
    else if(s>f && s>t){
    console.log("The highest number is",s)}
    else{
    console.log("The highest number is",t)}
   }
   
   aa(1,2,3);

   //const was missing in the function definition, 
   //and f,s,t redeclared so removed that


//Ques-2: Fix the code to Sum of the digits present in the number

let n = 123;

function add(n)
{
    console.log("Ques-2: Add the digits of 123")
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
     return sum;
}

console.log("The sum is",add(n));

//changed the entire code written within the func


//Ques-3: Fix the code to Sum of all numbers using IIFE function

const arr = [9,8,5,6,4,3,2,1];

(function() {
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    console.log("Ques-3: find the sum of the numbers in the array", arr);
    console.log("the sum is",sum);
   })();

   //after the for loop there was a semi colon, removed that


//Ques-4: Fix the code to gen Title caps.

var smallCaps = ["guvi", "geek", "zen", "fullstack"];

var getTitleCaps = function() {
    for (var i = 0; i < smallCaps.length; i++) {
    console.log(smallCaps[i][0].toUpperCase() + smallCaps[i].substring(1));
    }
   }

   console.log("Ques-4 Get the Title caps for each of the strings in the array ",smallCaps);
   getTitleCaps();

   //used substtring func instead of the deprecated substr func, changed the condition i <= smallCaps.length to i < smallCaps.length

//Ques-5: Fix the code to return the Prime numbers

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0)
 {
   return false;
 }
 }
 return true;
});

console.log("Ques-5: Return the prime numbers from the array",newArray )
console.log("the prime numbers are",myPrime);

// changed the return condition to false for num%i==0, else condition to return true

//Ques-6: Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) => {return a + b}
const summation = num.reduce(sum)

console.log("Find the summation of the numbers in the array", num)
console.log("The sum is",summation);

//added return function in the callback func


//Ques-7: Fix the code to rotate an array by k times and return rotated array using IIFE function

var arr7 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
console.log(`Ques-7: Rotating the array ${arr7} by ${k} times`);

(function() {
  //  arr7 = {};
    out = arr7.slice(k , arr7.length);
    var count = out.length;
    for (var i = 0; i <= k - 1; i++) {
       out[count] = arr7[i];
       count += 1;
     }
 console.log("The rotated array is",out);
})();


//removed arr7 = {} in the func definition

//Ques-8: print all odd numbers in an array using IIFE function

var arr8 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];

(function() {
    console.log(`Ques-8: print all odd numbers in the array ${arr8}`)
    for (var i = 0; i < arr8.length; i++) {
    if (arr8[i] % 2 != 0) {
    console.log(arr8[i]);
    }}
   })();

   //changed the if condition from arr[i] % 2

//Ques-9: Fix the code to reverse.

(function(str){
    console.log("Ques-9: Fix the code to reverse")
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")


//Ques-10 : Fix the code to remove duplicates.

var res = function(arr10){
   let newArr = [];
  console.log("Ques-10: Fix the code to remove duplicates from the array",arr10 )
    for(var i=0; i < arr10.length; i++){
      if(newArr.indexOf(arr10[i]) == -1) {
        newArr.push(arr10[i]);
       }}
    console.log("Array after removing dupliates",newArr)
   }(["guvi","geek","guvi","duplicate","geeK"])

   //newArr declared outside the for loop


//Ques-11: Fix the code to give the below output:

// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

var arr11 =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
console.log("Ques-11: Fix the code to give the desired output")

while(arr11.length!=0)
{
  var outer_remove = arr11.shift();
  let new_object ={}

 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)}

 console.log("The desired output is",final)



 //Ques-12: Sum of odd numbers in an array


var arr12 = [12, 34, 5, 6, 2, 56, 6, 2, 1];
console.log("Ques-12: fix the code to find the Sum of odd numbers in the array",arr12)

var s = arr12.reduce(function(a=0, c) {
  if (c % 2 != 0) {
    return a + c;
  }
  return a;
},0);

console.log("sum is",s);

// initialized the value of accumulator to 0

//Ques-13: Swap the odd and even digits

const aa13 = (data) =>{
    var a=data;
    var l=''; //l redeclared outside the for block
   for(i=0;i<a.length-1;i++){
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i++;
   }
   if((a.length%2)!=0)
   {
    l+=a[a.length-1]
   }
   console.log(l);
   }
   
   console.log("Ques-13: Swap the odd and even digits of",1234 )
   aa13("1234");