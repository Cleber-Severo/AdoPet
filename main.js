const visibilityBtn1 = document.getElementById("visibilityBtn1")
visibilityBtn1.addEventListener("click", toggleVisibility1)

const visibilityBtn2 = document.getElementById("visibilityBtn2")
visibilityBtn2.addEventListener("click", toggleVisibility2)

const visibilityBtn3 = document.getElementById("visibilityBtn3")
visibilityBtn3.addEventListener("click", toggleVisibility3)


function toggleVisibility1() {
    const passwordInput1 = document.getElementById("cadastro__senha")

    const type =  passwordInput1.getAttribute("type")=== "password" ? "text" : "password"
    passwordInput1.setAttribute("type", type)
}

function toggleVisibility2() {
    const passwordInput2 = document.getElementById("cadastro__senhaConfirma")

    const type =  passwordInput2.getAttribute("type")=== "password" ? "text" : "password"
    passwordInput2.setAttribute("type", type)
}

function toggleVisibility3() {
    const passwordInput3 = document.getElementById("senha")

    const type =  passwordInput3.getAttribute("type")=== "password" ? "text" : "password"
    passwordInput3.setAttribute("type", type)
}