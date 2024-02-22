const list = document.getElementById("user-list")

for(let i = 0; i < localStorage.length; i++){
    let li = document.createElement("li")
    const user = JSON.parse(localStorage.getItem(localStorage.key(i)))
    li.append(user.name + " - " + user.email)
    list.appendChild(li)
}

