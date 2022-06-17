// Add your code here


function submitData(){
    return (fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve", 
            email: "steve@steve.com"
        })
    }).then(resp => resp.json())
    .then(data => document.querySelector('body').textContent = data.id)
    .catch(message => document.querySelector('body').textContent = message)
    )
}

// submitData()




//IGNORE 
// const body = document.querySelector('body')
// p = document.createElement('p')
// body.appendChild(p)
// // p.textContent="hi"
// console.log(body)
