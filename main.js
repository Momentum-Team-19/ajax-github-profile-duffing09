const information = document.querySelector('#information')

fetch('https://api.github.com/users/duffing09', {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
})
    .then((response) => {
        console.log(response)
        return response.json()
})

.then((data) => {
    console.log(data)
    console.log(data.name)

    let imgDiv = document.createElement('img')
    imgDiv.src = data.avatar_url
    information.appendChild(imgDiv)

let name = document.createElement('h2')
name.innerText = data.name
information.appendChild(name)


let location = document.createElement('p')
location.innerText = `location: ${data.location}`
information.appendChild(location)

let urlDiv = document.createElement('a')
urlDiv.innerText = `GitHub URL: ${data.html_url}`
urlDiv.href = data.html_url
information.appendChild(urlDiv)

let userDiv = document.createElement('p')
userDiv.innerText = `GitHub Username: ${data.login}`
information.appendChild(userDiv)
//     for (let result of data) {
//         let gavDiv = document.createElement('div')
//         let nameDiv = document.createElement('p')
//         nameDiv.innerText = result.name
//         gavDiv.appendChild(nameDiv)
//         information.appendChild(pokeDiv) 
//     }
})

const repoList = document.querySelector('#repoList')
fetch('https://api.github.com/users/duffing09/repos', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) =>{
        console.log(response)
        return response.json()
})

.then((repos) => {
    console.log(repos)
    //this is listing the repos in the console
    for (let repo of repos) {
        console.log(repo.name)
let repoDiv = document.createElement('a')
repoDiv.innerText = repo.name
repoDiv.href = repo.html_url
repoList.appendChild(repoDiv)

    }
})
