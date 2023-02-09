// Basic Exercise 

// let result = document.getElementById("result");

// var sandwiches = { 
//     sandwich": "hamburger", 
//     calories: 260, };
// var fries = { 
//     fries_size": "Large French Fries", 
//     calories: 570, };

// result.innerHTML = `My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories.`

// Intermediate Exercise 

let employees = `[{
    "id" : "001",
    "firstName" : "Gerald",
    "lastName" : "Mustermann",
    "email" : "gerald.mustermann@email.com",
    "jobTitle" : "CEO",
    "Salary" : "4000€" 
},{
    "id" : "002",
    "firstName" : "Karin",
    "lastName" : "Fischer",
    "email" : "karin.fischer@email.com",
    "jobTitle" : "Outreach Manager",
    "Salary" : "3500€" 
},{
    "id" : "003",
    "firstName" : "Anna",
    "lastName" : "Müller",
    "email" : "anna.müller@email.com",
    "jobTitle" : "Lead Marketing Manager",
    "Salary" : "3500€"
}, {
    "id" : "004",
    "firstName" : "Thomas",
    "lastName" : "Fischer",
    "email" : "Thomas.Fischer@email.com",
    "jobTitle" : "Head of production",
    "Salary" : "3000€"
}, {
    "id" : "005",
    "firstName" : "Gerhard",
    "lastName" : "Sinowitz",
    "email" : "gerhard.sinwoitz@email.com",
    "jobTitle" : "Production worker",
    "Salary" : "2500€"
}, {
    "id" : "006",
    "firstName" : "Christian",
    "lastName" : "Havlenka",
    "email" : "christian.havlenka@email.com",
    "jobTitle" : "Production worker",
    "Salary" : "2500€"
}, {
    "id" : "007",
    "firstName" : "Lisa",
    "lastName" : "Schmidt",
    "email" : "lisa.schmidt@email.com",
    "jobTitle" : "Office Manager",
    "Salary" : "2700€"
}, {
    "id" : "008",
    "firstName" : "Michael",
    "lastName" : "Dorfer",
    "email" : "michael.dorfer@email.com",
    "jobTitle" : "Delivery driver",
    "Salary" : "1800€"
}, {
    "id" : "009",
    "firstName" : "Friedrich",
    "lastName" : "Kneissl",
    "email" : "friedrich.kneissl@email.com",
    "jobTitle" : "Delivery Driver",
    "Salary" : "1800€"
}, {
    "id" : "010",
    "firstName" : "Franz",
    "lastName" : "Kneissl",
    "email" : "franz.kneissl@email.com",
    "jobTitle" : "Delivery driver part-time",
    "Salary" : "1400€"
}]`


// let employees = require('employees.json');



for(let val of JSON.parse(employees)) {
    document.getElementById("employeeTable").innerHTML +=`
            <tr>
              <td scope="row">${val.id}</td>
              <td>${val.firstName}</td>
              <td>${val.lastName}</td>
              <td>${val.email}</td>
              <td>${val.jobTitle}</td>
              <td>${val.Salary}</td>
            </tr>
`;
}



// Advanced Exercise 

let books = `[{
    "title" : "Game Of Thrones",
    "author" : "George RR Martin",
    "read" : "true",
    "cover" : "#"
}, {
    "title" : "Dune",
    "author" : "Frank Herbert",
    "read" : "true",
    "cover" : "#"
}, {
    "title" : "Winter Soldier",
    "author" : "Daniel Mason",
    "read" : "false",
    "cover" : "#"
}, {
    "title" : "The Road",
    "author" : "Cormac MacCarthy",
    "read" : "false",
    "cover" : "#"
}, {
    "title" : "The Lord Of The Rings",
    "author" : "J.R.R. Tolkien",
    "read" : "true",
    "cover" : "#"
}, {
    "title" : "1984",
    "author" : "George Orwell",
    "read" : "true",
    "cover" : "#"
}, {
    "title" : "East Of Eden",
    "author" : "John Steinbeck",
    "read" : "false",
    "cover" : "#"
}, {
    "title" : "Wheel Of Time",
    "author" : "Robert Jordan",
    "read" : "true",
    "cover" : "#"
}, {
    "title" : "Moby Dick",
    "author" : "Herman Melville",
    "read" : "true",
    "cover" : "#"
}, {
    "title" : "A Thousand Splendid Suns",
    "author" : "Khaled Hosseini",
    "read" : "true",
    "cover" : "#"
}]`

for(let val of JSON.parse(books)) {
    if (val.read = "true"){
    document.getElementById("container").innerHTML +=`
    <div class="card bg-success" style="width: 18rem;">
  <img src=${val.cover} class="card-img-top" alt=${val.title}>
  <div class="card-body">
    <h5 class="card-title">${val.title}</h5>
    <p class="card-text">by: ${val.author}</p>
  </div>
</div>`} else {
    document.getElementById("container").innerHTML +=`
<div class="card bg-danger" style="width: 18rem;">
<img src=${val.cover} class="card-img-top" alt=${val.title}>
<div class="card-body">
<h5 class="card-title">${val.title}</h5>
<p class="card-text">by: ${val.author}</p>
</div>
</div>`
};
}