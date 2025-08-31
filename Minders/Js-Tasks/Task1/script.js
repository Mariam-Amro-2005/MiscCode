document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById("data-table");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Data fetch success!")
        return response.json();
    })
    .then(data => {
        data.forEach(post => {
            let userID = post.userId;
            let id = post.id;
            let title = post.title;
            let body = post.body;
            let row = document.createElement("tr");
            let userCell = document.createElement("td");
            userCell.textContent = userID;
            row.appendChild(userCell);
            let idCell = document.createElement("td");
            idCell.textContent = id;
            row.appendChild(idCell);
            let titleCell = document.createElement("td");
            titleCell.textContent = title;
            row.appendChild(titleCell);
            let bodyCell = document.createElement("td");
            bodyCell.textContent = body;
            row.appendChild(bodyCell);
            table.appendChild(row);  
            // console.log(row);                  
        })
    })
    .catch(error => {
        console.error("Failed to process data:", error);})
} )







// document.addEventListener("DOMContentLoaded", () => {
//     const table = document.getElementById("data-table");

//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json(); // Parse the JSON
//         })
//         .then(data => {
//             data.forEach(post => {
//                 const row = document.createElement("tr");

//                 const userIdCell = document.createElement("td");
//                 userIdCell.textContent = post.userId;
//                 row.appendChild(userIdCell);

//                 const idCell = document.createElement("td");
//                 idCell.textContent = post.id;
//                 row.appendChild(idCell);

//                 const titleCell = document.createElement("td");
//                 titleCell.textContent = post.title;
//                 row.appendChild(titleCell);

//                 const bodyCell = document.createElement("td");
//                 bodyCell.textContent = post.body;
//                 row.appendChild(bodyCell);

//                 table.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//             const errorRow = document.createElement("tr");
//             const errorCell = document.createElement("td");
//             errorCell.colSpan = 4;
//             errorCell.textContent = "Failed to load data.";
//             errorCell.style.color = "red";
//             errorRow.appendChild(errorCell);
//             table.appendChild(errorRow);
//         });
// });
