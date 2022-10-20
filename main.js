const visibilityBtn = document.getElementById("visibilityBtn")
visibilityBtn.addEventListener("click", toggleVisibility)



function toggleVisibility() {
    const passwordInput = document.getElementById("cadastro__senha")

    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        
    } else {
        passwordInput.type = "password"
    }
}