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
