function userIdFilter(userId){
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
        let posts = response.data
        document.getElementById("posts").innerHTML = ""
        for (post of posts){
            document.getElementById("posts").innerHTML += `
            <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </div>
            `
        }
    })
}

function getAllUsersAxios(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        let users = response.data
            for(user of users){
                document.getElementById("users").innerHTML += `
                <div id="users" onclick="userIdFilter(${user.id})" class="user">
                <h2>${user.name}</h2>
                <p>${user.email}</p>
                </div>
                `        
            }
    })
    .catch(function (error) {
        document.getElementById("users").innerHTML += `
        <div id="users" onclick="userIdFilter()" class="user">
        <h2>Error</h2>
        <p>${error.response.status}</p>
        </div>
        `                
        console.log(error.response.status);
    })
    .then(function () {
    });
}
getAllUsersAxios()

// function userIdFilter(userId){
//     let request = new XMLHttpRequest()
//     request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){
//         if (request.status >= 200 && request.status < 300){
//             let posts = request.response
//             for(post of posts){
//                 document.getElementById("posts").innerHTML += `
//                 <div class="post">
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//                 </div>
//                 `
//             }
//             console.log(response)
//             console.log(`the status code is ${request.status}`)
//         } else {
//             console.log(`error ${request.status}`)
//         }
//     }
//     document.getElementById("posts").innerHTML = ``
// }
// function getAllUsers(){
//     let request = new XMLHttpRequest()
//     request.open("GET", "https://jsonplaceholder.typicode.com/users")
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){
//         if (request.status >= 200 && request.status < 300){
//             let users = request.response
//             for(user of users){
//                 document.getElementById("users").innerHTML += `
//                 <div onclick="userIdFilter(${user.id})" class="user">
//                 <h2>${user.name}</h2>
//                 <p>${user.email}</p>
//                 </div>
//                 `
//             }
//         } else {
//             console.log(`error ${request.status}`)
//         }
//     }
// }
// getAllUsers()

// function getAllUsers(){
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => { 
//             let users = response.json()
//             if (response.status >= 200 && response.status < 300){
//                 return users
//             } else {
//                 reject(`error ${response.status}`)
//             }
//         })
//         .then((users) => {
//             for(user of users){
//                 document.getElementById("users").innerHTML += `
//                 <div id="users" onclick="userIdFilter(${user.id})" class="user">
//                 <h2>${user.name}</h2>
//                 <p>${user.email}</p>
//                 </div>
//                 `        
//             }
//         })
//         resolve()
//     })
// }
// function userIdFilter(userId){
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response) => {
//         let posts = response.json()
//         if (response.status >= 200 && response.status < 300){
//             return posts 
//         } else {
//             console.log(`error ${response.status}`)
//         }
//     })
//     .then((posts) => {
//         document.getElementById("posts").innerHTML = ""
//         for (post of posts){
//             document.getElementById("posts").innerHTML += `
//             <div class="post">
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//             </div>
//             `
//         }
//     });
// }

// getAllUsers()
// .then(() => {
//     userIdFilter(1)
// }) 

// new Promise((resolve) => {
//     document.getElementById("users").style
// })