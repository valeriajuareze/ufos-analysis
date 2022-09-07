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

function handleClick(){
//1. Grab the datetime value from the filter
let date= d3.select("#datetime").property("value");
let filteredData= tableData;  
//2. Check to see if a date was entered and filter the data using that date
if (date){
//3. Apply filter to the table data to only keep the rowa where the datetime value matches the filter value
    filteredData= filteredData.filter(row => row.datetime === date);
};
//4. Rebuild the table using the filtered data
buildTable(filteredData);
}
//5. Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//6. Build the table when the page loads
buildTable(tableData);






