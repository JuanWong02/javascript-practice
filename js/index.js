

var elemLoginButton = document.getElementById("login_button");
console.log(elemLoginButton);

const USER_MESSAGE_ELEMENT_ID = "user_message";
const ERROR_MESSAGE_ELEMENT_CLASS = "error-message";

elemLoginButton.onclick = function () {
    console.log("Login button clicked")
        

function showMessage(message, isError) {
    
    var elemPreviousMessage = document.getElementById(USER_MESSAGE_ELEMENT_ID);
    //borrar mensaje anterior en caso de existir
    if (elemPreviousMessage) {
        elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
    }

    
    //Crear Mensaje de bienvenido//
    var elemMessage = document.createElement("p");
    elemMessage.innerText = message;
    elemMessage.id = USER_MESSAGE_ELEMENT_ID;
    if(isError) {
        elemMessage.className = ERROR_MESSAGE_ELEMENT_CLASS;
    }
    
    //mostrar mensaje de bienvennida//
    var elemMainDiv = document.getElementById("main_div");
    elemMainDiv.appendChild(elemMessage);
    
}

    var elemUsername = document.getElementById("username");
    var elemPassword = document.getElementById("password");

    console.log(elemUsername);
    console.log(elemPassword);

    var username = elemUsername.value;
    var password = elemPassword.value;
    console.log(username);
    console.log(password);

    if (username === "admin" && password === "admin") {
        //Crear Mensaje de bienvenido//
        //var elemWelcomeMessage = document.createElement("p");
        //elemWelcomeMessage.innerText = "Bienvenido " + username;
        //mostrat mensaje de bienvennida//
        //var elemMainDiv = document.getElementById("main_div");
        //elemMainDiv.appendChild(elemWelcomeMessage);

        showMessage("Bienvenido " + username);

    } else if (username.trim() === "" || password === ""){
        showMessage("Completa todos los campos",true);
    } else {
        showMessage("Credencial invalida",true); 
    }

}
