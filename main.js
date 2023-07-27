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
let name = document.createElement('div')
name.innerText = data.name
information.appendChild(name)

let location = document.createElement('p')
location.innerText = `location: ${data.location}`
information.appendChild(location)

let urlDiv = document.createElement('p')
urlDiv.innerText = `GitHub URL: ${data.html_url}`
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

const repos = document.querySelector('#repos')
fetch('https://api.github.com/users/duffing09/repos', {
    method: 'GET',
    headers: {"Content-Type": "application/json"}
})

    .then((response) =>{
        console.log(response)
        return response.json()
})

.then((data) => {
    console.log(data)
})
