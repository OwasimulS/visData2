let info = document.getElementById('info');
let infoTable = document.getElementById('infoTable');
// fetch('https://randomuser.me/api/?results=100')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         let newRow = document.createElement('tr');
//         let newFirstName = document.createElement('td');
//         let newLastName = document.createElement('td');
//         let newGender = document.createElement('td');

//         newFirstName.innerHTML = data.name.title;
//         newRow.append(newFirstName);
//         infoTable.append(newRow);
//     })

fetch('https://randomuser.me/api/?results=100')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for(let i = 50; i < 100; i++) {
            let newRow = document.createElement('tr');

            let newFirstName = document.createElement('td');
            newFirstName.innerHTML = data.results[i-50].name.first;
            newRow.append(newFirstName);

            let newLastName = document.createElement('td');
            newLastName.innerHTML = data.results[i-50].name.last;
            newRow.append(newLastName);

            let newGender = document.createElement('td');
            newGender.innerHTML = data.results[i-50].gender;
            newRow.append(newGender);

            infoTable.append(newRow);
        }
    })