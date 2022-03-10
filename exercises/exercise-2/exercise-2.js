/*
# Exercise 2

_Need some help? Refresh your memory with [this article](https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)_

In `exercise-2.js`, you have an array that contains a list of people who are at Hogwarts School of Witchcraft and Wizardry.
For each character you have the following information:
- First Name
- Last Name
- School House
- Pet
- Occupation
*/
let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall", 
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];
/*

## Task 1:
- In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names
 of the people who belong to the Gryffindor house.
- Use array destructuring to extract the values you need out of the array.
### Expected result
```
Harry Potter
Ron Weasley
Hermione Granger
Minerva McGonagall
Albus Dumbledore
```*/
console.log("Task1");
function gryffindorHouse(array) {
  for (const members of array) {
    //const members = {firstName, lastName, house, pet, occupation};
   const { firstName, lastName, house,pet, occupation} = members;
 if (members.house === "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  }
}
gryffindorHouse(hogwarts);
/*
## Task 2
- In `exercise-2.js` write a program that will take the `hogwarts` array as input and 
display the names of teachers who have pets.
- Use array destructuring to extract the values you need out of the array.
### Expected result
```
Albus Dumbledore
```
*/

console.log("Task 2");
function teacherWithPet(array) {
  for (const teachers of array) {
      const { firstName, lastName, house,pet, occupation} = teachers;
     // console.log(teachers);
 if (teachers.occupation === "Teacher" && teachers.pet !== null){ //comparison to sort
      console.log(`${firstName} ${lastName}`);
    }
  }
}
teacherWithPet(hogwarts);