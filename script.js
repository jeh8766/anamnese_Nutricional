const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2")
const buttonPreencherFicha = document.querySelector("#button_preencher_ficha");
const buttonCancelar=document.querySelector("#buttonCancelar");
const formDadosPessoais= document.querySelector("#formDadosPessoais");
const formSaudeGeral= document.querySelector("#formSaudeGeral");
const buttonContinuar= document.querySelector("#buttonContinuar");
const buttonVoltar = document.querySelector("#buttonVoltar");
const buttonCancelar2= document.querySelector("#buttonCancelar2");
const dataInput = document.querySelector("#data");
const nomeInput = document.querySelector("#nome");
const alturaInput = document.querySelector("#altura");
const emailInput = document.querySelector("#email");
const enderecoInput = document.querySelector("#endereco");
const telefoneInput = document.querySelector("#telefone");
const pesoInput = document.querySelector("#peso");
const apenasLetras = /^[A-Za-zÀ-ÿ\s]+$/;

buttonPreencherFicha.onclick = function (){
    modal1.showModal();
}

buttonCancelar.onclick = function (){
    modal1.close();
}

buttonContinuar.onclick = function (){
    
    if (nomeInput.value.trim() === ""){
        alert("por favor, preencha seu nome");
        nomeInput.focus();
        return;
    }

    if (!apenasLetras.test(nomeInput.value)) {
        alert("Digite um nome válido, números não são permitidos");
        return;
    }

    if (alturaInput.value.trim() === "" || alturaInput.value <= 0){
        alert("por favor, insira uma altura válida (em cm).");
        alturaInput.focus();
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())){
        alert("Por favor, insira um email válido");
        emailInput.focus();
        return;
    }

    if(new Date(dataInput.value)>new Date()){
        alert("Data de Nascimento inválida.")
        return;
    }

    if (enderecoInput.value.trim() === ""){
        alert("por favor, preencha o seu endereço.");
        enderecoInput.focus();
        return;
    }
    if (pesoInput.value.trim() === "" || pesoInput.value <= 0){
            alert("por favor, insira um peso válido (em kg).");
            pesoInput.focus();
            return;
        }

    const telefoneValidado = telefoneInput.value.replace(/\D/g, "");
    if (telefoneValidado.length < 11) {
        alert("por favor, insira um número válido (com ddd).");
        telefoneInput.focus();
        return;
    }

    modal2.showModal();
}

buttonVoltar.onclick = function (){
    modal2.close();
}

buttonCancelar2.onclick = function (){
    modal1.close();
    modal2.close();
}

// form.addEventListener("submit", (Event) => {
//     Event.preventDefault();

//     // if(nameInput.value===""){
//     //     alert("Por favor, preencha o seu nome");
//     //     return;
//     // }

//     // if(emailInput.value==="" ){
//     //     alert("Por favor, preencha o seu email");
//     //     return;
//     // }

//     // if(!validatePassword(passwordInput.value, 8)){
//     //     alert("A senha precisa ter no mínimo 8 dígitos.")
//     //     return
//     // }
//     form.submit();
// })

