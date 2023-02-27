function showPassword() {
    var input = document.querySelector(".password");
    var passwordIcon = input.previousElementSibling.children[0]
    if (input.type === "password") {
        input.type = "text";
        passwordIcon.setAttribute("src", "/images/padlock-unlock-Dave_Gandy.png")
    } else {
        input.type = "password";
        passwordIcon.setAttribute("src", "/images/secured-lock-freepik.png")
    }
}