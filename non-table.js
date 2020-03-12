var employeePromise = d3.json("employee.json")

employeePromise.then(
    function(employees)
    {
        console.log("worked",employees);
    },
    
    function(err)
    {
        console.log("failed",err);
    }
    
var displayinfo = function(employees)
{
    
    d3.select("body")
      .selectAll("div")
      .data(employees)
      .enter()
      .append("div")
      .text(function)
    
    
    
    
    
}