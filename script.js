/** @format */

let employees = [
  { id: 1, name: "john", age: "18", profession:"developer"},
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developer = employees.map(employee => employee.profession ==="developer" ? employee : null).filter(employee => employee !== null);
            console.log(developer);
  }                 
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const developer =[];
    employees.forEach(employee => {
      if(employee.profession==="developer"){
        developer.push(employee);
      }

    });
    console.log(developer);
     

  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee ={id: 4, name: "Susan", age: 20, profession: "intern"};
    employees = [...employees,newEmployee];
    console.log(employees);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    employees = employees.filter(employee => employee.profession !=="admin");
     console.log(employees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployee =[
      {id: 5, name: "Alice", age: 28, profession: "designer" },
      { id: 6, name: "Bob", age: 32, profession: "developer" },
      { id: 7, name: "Charlie", age: 24, profession: "intern" }
    ];
    const concatenateArray =[...employees,...newEmployee];
    console.log(concatenateArray);
  }
  
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();