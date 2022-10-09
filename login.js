let passwordInput = document.getElementById("pass");
let toggleIcon = document.getElementById("show");
let ripple = document.getElementById("ripple");
let strenght_percent = document.querySelector("#strenght_percent span");
let passLabel = document.getElementById("strength_label");
let generatePassword = document.getElementById("createPassword");

passwordInput.addEventListener("input", handleInput);
toggleIcon.addEventListener("click", toggle_Icon);
generatePassword.addEventListener("click", generate_Password);



function handleInput(e){
    if(passwordInput.value.length === 0){
        passLabel.innerHTML = "Strength";
        change_strenght();
    }else if(passwordInput.value.length <=4){
        passLabel.innerHTML = "Weak";
        change_strenght("weak");
    }else if(passwordInput.value.length <=8){
        passLabel.innerHTML = "Okay";
        change_strenght("average");
    }else{
        passLabel.innerHTML = "Strong";
        change_strenght("strong");
    }
}

function change_strenght(className){
    strenght_percent.classList.remove("weak");
    strenght_percent.classList.remove(".average");
    strenght_percent.classList.remove("strong");
    if(className){
        strenght_percent.classList.add(className);
    }

}

function toggle_Icon(e){
    let type = passwordInput.getAttribute("type");
    if(type === "password"){
        passwordInput.setAttribute("type", "text");
        ripple.style.cssText =`
        border-radius = 4px;
        width = 100%;
        height = 100%;
        right = 0;
        z-index = -1;
        `;
        passwordInput.style.color = "#000";
        passwordInput.style.background= "transparent";
        toggleIcon.style.fontSize = "27px";
    }else{
        passwordInput.setAttribute("type", "password");
        ripple.style.cssText =`
        border-radius = 50%;
        width = 35px;
        height = 35px;
        right = 10px;
        z-index = 1;
        `;
        passwordInput.style.color = "#fff";
        passwordInput.style.background ="#112d37";
    }
}

function generate_Password(){
      
}