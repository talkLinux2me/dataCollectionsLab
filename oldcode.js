//refactored code from "feeling loopy"

const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;

csvString.split('\n').forEach(row => console.log(row.split(',').join(',')));