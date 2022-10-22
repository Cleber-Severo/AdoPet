//      --Algoritmo para alterar a visibilidade das senhas nas telas de cadastro e login--



//      **Pagina de cadastro**

//Botao de alterar visibilidade da senha
const visibilityBtn1 = document.getElementById("visibilityBtn1")

//testa se o id existe na pagina atual e chama a função que altera o tipo do input
if(visibilityBtn1) {visibilityBtn1.addEventListener("click", toggleVisibility1)}

//Botao de alterar visibilidade da confirmação da senha
const visibilityBtn2 = document.getElementById("visibilityBtn2")

//testa se o id existe na pagina atual e chama a função que altera o tipo do input
if(visibilityBtn2) {visibilityBtn2.addEventListener("click", toggleVisibility2)}

//função para alterar o tipo do input da senha na pagina de cadastro
function toggleVisibility1() {
    const passwordInput1 = document.getElementById("cadastro__senha")
   
    const type =  passwordInput1.getAttribute("type") === "password" ? "text" : "password"
    passwordInput1.setAttribute("type", type)

    //altera o icone
    var element = visibilityBtn1.classList;

    if (element.contains("fa-eye")) {

        element.remove("fa-eye")
        element.add("fa-eye-slash")

    } else {
        element.add("fa-eye")
        element.remove("fa-eye-slash")
    }
}

//função para alterar o tipo do input da confirmação de senha na pagina de cadastro
function toggleVisibility2() {
    const passwordInput2 = document.getElementById("cadastro__senhaConfirma")

    const type =  passwordInput2.getAttribute("type") === "password" ? "text" : "password"
    passwordInput2.setAttribute("type", type)

    //altera o icone
    var element2 = visibilityBtn2.classList;

    if (element2.contains("fa-eye")) {

        element2.remove("fa-eye")
        element2.add("fa-eye-slash")

    } else {
        element2.add("fa-eye")
        element2.remove("fa-eye-slash")
    }
}


//          **pagina de login**

//Botao de alterar visibilidade da senha
const visibilityBtn3 = document.getElementById("visibilityBtn3")

//testa se o id existe na pagina atual e chama a função que altera o tipo do input
if (visibilityBtn3) {visibilityBtn3.addEventListener("click", toggleVisibility3)}


//função para alterar o tipo do input da senha na pagina de login
function toggleVisibility3() {
    const passwordInput3 = document.getElementById("senha_login")

    const typeC =  passwordInput3.getAttribute("type") === "password" ? "text" : "password"
    passwordInput3.setAttribute("type", typeC)

    //altera o icone
    var element3 = visibilityBtn3.classList;

    if (element3.contains("fa-eye")) {

        element3.remove("fa-eye")
        element3.add("fa-eye-slash")

    } else {
        element3.add("fa-eye")
        element3.remove("fa-eye-slash")
    }
}