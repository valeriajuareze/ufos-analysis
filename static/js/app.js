// Import the data from data.js
const tableData=data;
// Reference the HTML table using D3
var tbody= d3.select("tbody"); //Tell JS to look for the tbody tags in HTML

function buildTable(data){
//1. Clear out any existing data 
    tbody.html("");
//2.Loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow)=>{
//3. Append a row to the table body
      let row= tbody.append("tr");
//4. Loop through each field in the dataRow and add each value as a table cell (td)
      Object.values(dataRow).forEach((val)=>{
        let cell=row.append("td");
        cell.text(val);
        }
      );
    });
}

    





