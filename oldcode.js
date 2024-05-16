//refactored code from "feeling loopy"

const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;

csvString.split('\n').forEach(row => console.log(row.split(',').join(',')));


//Declare a variable that stores the number of columns in each row of data within the CSV.
//Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.


const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;

// Splitting the CSV string into rows
const rows = csvString.split('\n');

// Extracting the header row to determine the number of columns
const headerRow = rows[0];
const numColumns = headerRow.split(',').length;

// Iterating over each row and logging it
rows.forEach(row => {
    // Splitting each row into cells and joining them with commas
    const cells = row.split(',');
    // Ensuring each row has the same number of columns as the header
    const formattedRow = cells.slice(0, numColumns).join(',');
    console.log(formattedRow);
});

//PART 2
//Store your results in a two-dimensional array.
//Each row should be its own array, with individual entries for each column.
//Each row should be stored in a parent array, with the heading row located at index 0.
//Cache this two-dimensional array in a variable for later use.

const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;

// Splitting the CSV string into rows
const rows = csvString.split('\n');

// Extracting the header row to determine the number of columns
const headerRow = rows[0];
const numColumns = headerRow.split(',').length;

// Storing the CSV data in a two-dimensional array
const csvData = [];

// Processing each row and storing it in the csvData array
rows.forEach((row, rowIndex) => {
    // Splitting each row into cells
    const cells = row.split(',');
    // Creating a new array to store the row data
    const rowData = [];
    // Iterating over each cell and pushing it to the rowData array
    for (let i = 0; i < numColumns; i++) {
        // Pushing the cell value or an empty string if the cell doesn't exist
        rowData.push(cells[i] || '');
    }
    // Storing the rowData array in the csvData array
    csvData.push(rowData);
});

// Logging the two-dimensional array
console.log(csvData);

/** PART 3
 * For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
 */

const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;

// Splitting the CSV string into rows
const rows = csvString.split('\n');

// Extracting the header row to determine the number of columns and column headings
const headerRow = rows[0];
const columnHeadings = headerRow.split(',');

// Storing the CSV data in a two-dimensional array
const csvData = [];

// Processing each row and storing it in the csvData array
rows.slice(1).forEach(row => {
    // Splitting each row into cells
    const cells = row.split(',');
    // Creating an object for the row data
    const rowData = {};
    // Iterating over each cell and assigning it to the corresponding column heading
    cells.forEach((cell, index) => {
        // Converting column headings to lowercase for consistency
        const key = columnHeadings[index].toLowerCase();
        // Assigning the cell value to the corresponding key in the rowData object
        rowData[key] = cell;
    });
    // Storing the rowData object in the csvData array
    csvData.push(rowData);
});

// Logging the array of objects
console.log(csvData);

/** PART 4 
 * Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }*/

// Assuming csvData is the array of objects generated earlier

// Sort the array of objects by the "id" property
csvData.sort((a, b) => parseInt(a.id) - parseInt(b.id));

// Remove the last element from the sorted array
csvData.pop();

// Insert the new object at index 1
csvData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add a new object to the end of the array
csvData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Logging the modified array
console.log(csvData);

//Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
//This calculation should be accomplished using a loop.

// Assuming csvData is the array of objects modified earlier

let totalAge = 0;

// Iterate over each object in the array
csvData.forEach(obj => {
    // Convert age to a number and add it to the totalAge
    totalAge += parseInt(obj.age);
});

// Calculate the average age
const averageAge = totalAge / csvData.length;

// Logging the average age
console.log("Average Age:", averageAge);
