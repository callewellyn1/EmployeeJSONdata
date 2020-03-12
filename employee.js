var employeePromise = d3.json("employee.json")

employeePromise.then(
    function(employees)
    {
        console.log("worked",employees);
        displayTable(employees)
    },
    
    function(err)
    {
        console.log("failed",err);
    }


)

var displayTable = function(employees)
{
var rows = d3.select("#etable")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")

rows.append("td")
    .text(function(employees){return employees.firstName})
rows.append("td")
    .text(function(employees){return employees.lastName})

rows.append("td")
    .append("img")
    .attr("src", function(employees){return employees.photo})
    
rows.append("td")
    .text(function(employees){return employees.title})
rows.append("td")
    .text(function(employees){return employees.unit})
rows.append("td")
    .text(function(employees){return employees.email})
rows.append("td")
    .text(function(employees){return employees.bio})
rows.append("td")
    .text(function(employees){return employees.phone})

}