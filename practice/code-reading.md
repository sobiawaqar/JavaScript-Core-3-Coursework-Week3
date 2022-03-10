# Code reading

## Question 1

Take a look at the following code:

let x = 8;
function f1()
{
       let x = 2; // the value of x inside the function is local so not accessible outside the function
console.log(x); //console.log here gives the function scope inside the function not outside, when function f1() will be called, it will display the value of x
   }
 console.log(x); // line 7 is not giving an output as x is not defined 

 //f1(); when function will be called it will output 2);
```

Explain why line 11 and line 13 output different numbers.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```
What will be the output of this code. Explain your answer in 50 words or less
Answer:
//console.log(f1()) This will be called and display 10 when function is called but then an error ////undefined as it cannot be accessed inside the function

//console.log(y)  y is defined/declared inside the function and called outside. y has not global scope



## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```
What will be the output of this code. Explain your answer in 50 words or less.
// Answer:  
// function f1() will return 9 because as it is defined with a const so cannot be changed. 
f2() object properties can be modified as x gives 10 instead of 9.