var emp={
    name:"E1",
    id:100,
    designation:"Consultant",
    city:"Bangalore",
    email:"e1@xyz.com",
};
console.log(emp.name);
console.log(emp.email);
//Insert new property inside object
emp.company="xyz";
console.log(emp);
// To delete properties in an existing object
delete emp.designation;
console.log(emp);

// var obj={
//     name:"Raj",
//     id:102,
//     city:"Hyd",
// };
// console.log(obj);
// delete obj.city;
// console.log(obj);