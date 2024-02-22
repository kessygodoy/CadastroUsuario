const username = document.getElementById("username")
const password = document.getElementById("password")
const formButton = document.getElementById("form-button")
const form = document.getElementById("form")
function sendForm(ev){
    ev.preventDefault()
    const user = JSON.parse(localStorage.getItem(username.value))
    console.log(user.username )
    console.log(username.value)

    if(username.value === user.username && password.value === user.password){
        alert(`Logado como ${user.name} com sucesso!`)
        username.hidden = true
        password.hidden = true
        formButton.hidden = true
        const logoffButton = document.createElement("button")
        logoffButton.addEventListener("click", () => {})
        logoffButton.innerText = "logoff"
        form.appendChild(logoffButton)
        
    } else 
        alert("Ops... Usuário ou senha estão errados.")
}

formButton.addEventListener("click", sendForm)