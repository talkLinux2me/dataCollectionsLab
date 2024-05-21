//refactored code from "feeling loopy"

const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;

let fubar = csvString.split('\n').forEach(row => console.log(row.split(',').join(',')));

console.log (fubar)
console.log (csvString)


//Declare a variable that stores the number of columns in each row of data within the CSV.
//Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

//let columns = 4;
//for (let i = 0; i <= columns, i++){

// }


//PART 2
//Store your results in a two-dimensional array.
//Each row should be its own array, with individual entries for each column.
//Each row should be stored in a parent array, with the heading row located at index 0.
//Cache this two-dimensional array in a variable for later use.

// let 2dArray = 
    // [[42, "Bruce", "Knight", 41] [57, "Bob", "Fry Cook", 19] [63, "Blaine", "Quiz Master", 58] [98, "Bill", "Doctors Assistant", 26]]


/** PART 3
 * For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
 */



/** PART 4 
 * Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }*/



//Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
//This calculation should be accomplished using a loop.






/**PART 5
 * As a final task, transform the final set of data back into CSV format.
 */

