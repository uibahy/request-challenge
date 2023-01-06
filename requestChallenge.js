function userIdFilter(userId){
    let request = new XMLHttpRequest()
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    request.responseType = "json"
    request.send()
    request.onload = function(){
        if (request.status >= 200 && request.status < 300){
            let posts = request.response
            for(post of posts){
                document.getElementById("posts").innerHTML += `
                <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                </div>
                `
            }
            console.log(response)
            console.log(`the status code is ${request.status}`)
        } else {
            console.log(`error ${request.status}`)
        }
    }
    document.getElementById("posts").innerHTML = ``
}

function getAllUsers(){
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function(){
        if (request.status >= 200 && request.status < 300){
            let users = request.response
            for(user of users){
                document.getElementById("users").innerHTML += `
                <div onclick="userIdFilter(${user.id})" class="user">
                <h2>${user.name}</h2>
                <p>${user.email}</p>
                </div>
                `
            }
        } else {
            console.log(`error ${request.status}`)
        }
    }
}
getAllUsers()