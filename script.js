const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2")
const buttonPreencherFicha = document.querySelector("#button_preencher_ficha");
const buttonCancelar=document.querySelector("#buttonCancelar");
const form= document.querySelector("form");
const buttonContinuar= document.querySelector("#buttonContinuar");
const buttonVoltar = document.querySelector("#buttonVoltar");
const buttonCancelar2= document.querySelector("#buttonCancelar2");

buttonPreencherFicha.onclick = function (){
    modal1.showModal();
}

buttonCancelar.onclick = function (){
    modal1.close();
}

buttonContinuar.onclick = function (){
    modal2.showModal();
}

buttonVoltar.onclick = function (){
    modal2.close();
}

buttonCancelar2.onclick = function (){
    modal1.close();
    modal2.close();
}

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    // if(nameInput.value===""){
    //     alert("Por favor, preencha o seu nome");
    //     return;
    // }

    // if(emailInput.value==="" ){
    //     alert("Por favor, preencha o seu email");
    //     return;
    // }

    // if(!validatePassword(passwordInput.value, 8)){
    //     alert("A senha precisa ter no mínimo 8 dígitos.")
    //     return
    // }
    form.submit();
})

