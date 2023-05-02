/*

Written response Answers//
1. What does the acronym DRY stand for? Why should we pay attention to it?What programming tools have we learned to write DRY code?
 Answer : DRY stands for "Dont Repeat Yourself".
        : We should pay attention to it because we want to avoid writing duplicate code because there is a chance of being error more and not efficient. We have used function and loops to write DRY code.

//What is the difference between const and let and var?
Answers:
const variable cannot be changed. It is block-scope.
let variable can be reassign. It is mutable and block-scope
 var variable can be reassign and have hoisting behavior.
*/

/*
-----------------------Section: 2----------------------------------
Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator that evaluates the expression to true (some may have more than one right answer, just choose one)
Test your answers by using console.log for each expression in your answer file.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;

  Answers:
a<b
c>d
'Name'==='Name'
a <b<c
a ===a < d
e ==='Kevin'
48 !=='48'
f !==e
Set a new variable g to 0: let g = 0;
console.log(g)
Then set the variable g to be equal to b + c:
   g = b+c;
console.log (g)

Did you use const, let or var? Why did you choose the one you chose?
Answer: 
I use let because i have to change the value of g.
  
What happens if you don't use const , let or var? Do you get an error? If so what does it say?
what happens if you write 10 = g?
Answer: we get error and the error is listed below
Invalid left-hand side in assignment


Bonus Challenge:
Replace the underscores to make a Boolean expression that evaluates to true. Use no more than one of the following: > , < !== and ===.

a _ (b || f) _ !f && e _ c
Answer:
console.log(a !== (b || f) && !f && e !== c);
*/

/*
-------------------Section 3---------------------------------
1. Is the code below an infinite loop? Why or why not?
  Answer:
  Yes this is a infinite loop because this while loop is a truthy value all the time.

  2. is this loop an infinite loop? Why or why not?
  It is not a infinite loop because the while loop is incorrect because reassigning is not allowed in const variable.
  The expected output is constant variable cannot be reassign.

3. 
let letters = "A"; // it is assigning a string A to a variable letters
let i = 0; // this will initialize the value of i to 0

while (i < 20) {
	letters += "A"; // It will increment the value of letters by A everytime the loop runs
  
	i++; // increment i value by 1 
} // this is a conditional section where that value of i will be cheked and determine if its true of not if it is true it will add letter A through out the loop condition is true.

console.log(letters); // print the final value(through out the loop) of letters to the terminal.

*/

/*
-------------------------------Section 4-------------------------------------------
1. A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
  Answers:
  we know the number of iteration in for loop where as while loop number of iterations is unknown.

  similarities: 
 Both loop perform the same  operation by allowing us to loop a line of code insteasd of having repetitive lines


2. What are the three components of the control panel? Each component is separated by a semicolon ;.
for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
Remember: Write your answers as comments in the file.

The first part of the control panel is: Initialization.
The second part of the control panel is: Condition.
The third part of the control panel is: Iteration.

3. Write a for loop that will console.log the numbers 0 to 999.
for (i = 0; i <= 999; i++) {
  console.log("The number is " + i);
}

Bonus Question:

  console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
  Answer: Since single quotation also represent a string. Having multiples single quotation in a sentence may create a conflict so inorder to treat all the single quotation beside and first and last, a backward slash is neeeded


  4. Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

  Answer:
  for (i = 999; i >= 0; i--) {
  console.log(i);
}

5. Write a for loop that uses string concatenation to send a message to the console as well as the current value of i. 
for (i = 1; i <= 10; i++) {
  console.log("The value of i is: " + i + " of 10");
}

------------------Bonus Challenge------------------------------------------
for (i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
}

6. const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
Iterate over the StarWars array and print each element to the console.

Iterate over the StarWars array again and print each character's name as well as the value of i.

const StarWars1 = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i = 0; i < StarWars.length; i++) {
  console.log(StarWars1[i]);
}
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i = 0; i < StarWars.length; i++) {
  console.log(
    "The value of StarWars at index number " + i + " is " + StarWars[i]
  );
}

-------------------Bonus Challenge--------------------------------------------
Figure out how to iterate over every second element of the StarWars array, starting with the first element.
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

=> Han, R2D2, Leia
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i = 0; i < StarWars.length; i = i + 2) {
  console.log(StarWars[i]);
}

*/
