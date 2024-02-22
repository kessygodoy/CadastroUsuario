const name = document.getElementById("name")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passowrdConfirm = document.getElementById("password-confirm")
const formButton = document.getElementById("form-button")

function sendForm(ev){
    ev.preventDefault()
   
    if( localStorage.getItem(username.value)){
        return alert("Esse nome de usuário já está sendo utilizado, tente um diferente...")
    }
    if(!name.value ||username.value  === ""|| email.value  === ""|| passowrdConfirm.value  === ""|| password.value === ""){
        return alert("Por favor preencha todos os campos!")
    } else if( password.value != passowrdConfirm.value ){
        return alert("As senhas não conferem!")
    } 

    const novoUsuario = {
        name: name.value, 
        username: username.value,
        email: email.value,
        password: password.value,
        passowrdConfirm: passowrdConfirm.value,
    
}

    console.log(novoUsuario)

    localStorage.setItem(novoUsuario.username , JSON.stringify(novoUsuario))
    alert(`Usuário ${username.value} cadastrado com sucesso!`)
    
}

formButton.addEventListener("click", sendForm)

