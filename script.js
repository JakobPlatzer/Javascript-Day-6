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



for(let val of employees) {
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