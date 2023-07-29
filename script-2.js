//Ques-1: Write a code to print the numbers in the array

// Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
console.log("Ques-1: Write a code to print the numbers in the array",numsArr)
for (var i = 0; i < numsArr.length; i++) //incremented i and started counting i from 0
 {
 new_string += numsArr[i] 
}
console.log(new_string);


//Ques-2: Write a code to print the numbers in the array

// Output: 1,2,3,4,5,6,7,8,9,10,11


var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string2 = "";
console.log("Ques-2: Write a code to print the numbers in the array separated by commas",numsArr2 )
 
for (var i = 0; i < numsArr2.length; i++) //started counting i from 1
{
    if(i != numsArr2.length-1)
    new_string2 += numsArr2[i] + ","
    
    else
    new_string2 += numsArr2[i] //changed to not add a comma at the end
    
}

console.log(new_string2);

//Ques-3:Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string3 = "";
console.log("Ques-3:Write a code to print from last to first with spaces (Make sure there is no space after the last element 1) from the array",numsArr3)
 
for (var i = (numsArr3.length-1); i >= 0; i -- ) 
{
    if(i!=0)
    new_string3 += numsArr3[i] + " "
    else
    new_string3 += numsArr3[i] // added this to make sure there's no space after the last number
}
console.log(new_string3);

//Ques-4: Write a code to replace the array value — If the number is even, replace it with ‘even’.

// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("Ques-4: Write a code to replace the array value — If the number is even, replace it with even from the array",numsArr4 )

for (var i = 0; i <=10; i++) 
{
    if(numsArr4[i] %2 == 0 )
    {
        numsArr4[i] = "even"
    }
   }
   console.log(numsArr4);


//Ques-5: Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("Ques-5: Write a code to replace the array value — If the index is even, replace it with even.", numsArr5)

for (var i = 0; i <=10; i++) 
{
    if(i %2 == 0 ) //changed it to i%2 ==0 instead of numsArr5[i]
    {
        numsArr5[i] = "even"
    }
}

   console.log(numsArr5);

//Ques-6: Write a code to add all the numbers in the array

var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("Ques-6: Write a code to add all the numbers in the array", numsArr6)
var sum =0; //declared it outside the for loop

for (var i = 0; i < numsArr6.length; i++) 
{
    sum += numsArr6[i]
   }
   console.log(sum);


//Ques-7: Write a code to add the even numbers only

var numsArr7 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum7=0;
console.log("Ques-7: Write a code to add the even numbers only from the array", numsArr7)

for (var i = 0; i < numsArr7.length; i++) 
{
 if(numsArr7[i] % 2 == 0) //removed the semicolon
 {
 sum7 += numsArr7[i]
}
}
console.log(sum7);


//Ques-8: Write a code to add the even numbers and subract the odd numbers

var numsArr8 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum8=100;
console.log("Ques-8: Write a code to add the even numbers and subract the odd numbers in the array",numsArr8)

for (var i = 0; i <=10; i++) 
{
 if(numsArr8[i]%2 ==0) //removed semi colon
 {
    sum8 += numsArr8[i]
 }
 else
 {
    sum8 -= numsArr8[i]
 }
}
console.log(sum8);


//Ques-9: Write a code to print inner arrays

var numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]]; //separated the inner arrays by a comma
console.log("Ques-9: Write a code to print inner arrays from the array",numsArr9 )

for (let i = 0; i < numsArr9.length; i++)
{
      console.log( numsArr9[i])
}


//Ques-10:  Write a code to print elements in the inner arrays

//  Output: 1234567891011

var numsArr10 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=''; // initialized it to '' instead of 0
console.log("Ques-10:  Write a code to print elements in the inner arrays of the array",numsArr10 )

for (var i = 0; i < numsArr10.length; i++) 
{
 var inner_array = numsArr10[i];
 for(var j = 0 ; j < inner_array.length;j++ ) //incrementing j instead of i
     str_all +=inner_array[j]
}
console.log("The output is",str_all);


// Ques-11: Write a code to replace the array value — If the index is even, replace it with ‘even’.

// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArr11 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
console.log("Ques-11: Write a code to replace the array value — If the index is even, replace it with even")
let j_init = 0; //initialized this variable to keep track of index of values assuming that they belong to a single outer array without an inner array

for (var i = 0; i < numsArr11.length; i++) 
{
 var inner_array = numsArr11[i];
 for(var j = 0 ; j < inner_array.length;j++ )
 {
      if(j_init % 2 == 0 )
      {
        numsArr11[i][j] = "even"
       }
       j_init++;
}
}
console.log(numsArr11);


//Ques-12: Write a code to print elements in the inner arrays in reverse

//Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr12 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all_12='';
console.log("Ques-12: Write a code to print elements in the inner arrays in reverse")

for (var i = numsArr12.length-1; i >=0 ; i--)  //i initialized to the last element, conditional statement changed and i incremented
{
 var inner_array = numsArr12[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )  //j initialized to the last element, conditional statement changed
   str_all_12 = str_all_12 + inner_array[j] + " "
}
console.log(str_all_12);


//Ques-13: Write a code to add elements in the inner arrays based on odd or even values

// Output:
// 36
// 30

var numsArr13 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
console.log("Ques-13: Write a code to add elements in the inner arrays based on odd or even values")

for (var i = 0; i < numsArr13.length; i++) {
   var inner_array = numsArr13[i];
   for(var j = 0 ; j < inner_array.length;j++ ){
   if(numsArr13[i][j]%2!=0)   //changed it to access the inner array numsArr13[i] ------> numsArr13[i][j]
     {
       sum_odd += numsArr13[i][j]   //changed it to access the inner array numsArr13[i] ------> numsArr13[i][j]
     }
   else
      {
         sum_even += numsArr13[i][j]   //changed it to access the inner array numsArr13[i] ------> numsArr13[i][j]
      }
  }
}
console.log(sum_odd);
console.log(sum_even);