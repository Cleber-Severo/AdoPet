const visibilityBtn1 = document.getElementById("visibilityBtn1")
visibilityBtn1.addEventListener("click", toggleVisibility1)

const visibilityBtn2 = document.getElementById("visibilityBtn2")
visibilityBtn2.addEventListener("click", toggleVisibility2)


const visibilityBtn3 = document.getElementById("visibilityBtn3")
visibilityBtn3.addEventListener("click", toggleVisibility3)


function toggleVisibility1() {
    const passwordInput1 = document.getElementById("cadastro__senha")
   
    const type =  passwordInput1.getAttribute("type") === "password" ? "text" : "password"
    passwordInput1.setAttribute("type", type)

    var element = visibilityBtn1.classList;

    if (element.contains("fa-eye")) {

        element.remove("fa-eye")
        element.add("fa-eye-slash")

    } else {
        element.add("fa-eye")
        element.remove("fa-eye-slash")
    }
}

function toggleVisibility2() {
    const passwordInput2 = document.getElementById("cadastro__senhaConfirma")

    const type =  passwordInput2.getAttribute("type") === "password" ? "text" : "password"
    passwordInput2.setAttribute("type", type)

    var element2 = visibilityBtn2.classList;

    if (element2.contains("fa-eye")) {

        element2.remove("fa-eye")
        element2.add("fa-eye-slash")

    } else {
        element2.add("fa-eye")
        element2.remove("fa-eye-slash")
    }
}

function toggleVisibility3() {
    const passwordInput3 = document.getElementById("senha_login")

    const typeC =  passwordInput3.getAttribute("type") === "password" ? "text" : "password"
    passwordInput3.setAttribute("type", typeC)

    var element3 = visibilityBtn3.classList;

    if (element3.contains("fa-eye")) {

        element3.remove("fa-eye")
        element3.add("fa-eye-slash")

    } else {
        element3.add("fa-eye")
        element3.remove("fa-eye-slash")
    }
}

/*
function mudaIcone() {
var element = document.getElementById("visibilityBtn1");

if (element.classList.contains("fa-eye")) {

    element.classList.remove("fa-eye")
    element.classList.add("fa-eye-slash")

  } else {

    element.classList.add("fa-eye")
  }
}
*/