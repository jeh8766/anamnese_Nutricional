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
const cirurgias = document.querySelector("#cirurgias");
const medicamentos = document.querySelector("#medicamentos");
const genero = document.querySelector("#genero");
const fuma = document.querySelector("#fuma");
const bebe = document.querySelector("#bebe");


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
        alert("Digite um nome válido, números e caracteres especiais não são permitidos");
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

    if(genero.value===""){
        alert("Selecione o gênero.")
        return;
    }

    if(new Date(dataInput.value)>new Date() || dataInput.value===""){
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
        alert("por favor, insira um número válido (com ddd) de acordo com o formato exemplificado.");
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

formSaudeGeral.addEventListener("submit", (event) => {
    event.preventDefault();
    let hipertenso= document.querySelector("input[name='hipertenso']:checked");
    let diabetico= document.querySelector("input[name='diabetico']:checked")

    if(fuma.value===""){
        alert("O campo 'Fuma?' deve estar selecionado com uma opção válida.")
        return;
    }

    if(bebe.value===""){
        alert("O campo 'Bebe?' deve estar selecionado com uma opção válida.")
        return;
    }

    if(cirurgias.value.trim()===""){
        alert("O campo 'Já fez alguma cirurgia? Se sim, quais?' não pode estar vazio");
        return;
    }

    if(medicamentos.value.trim()===""){
        alert("O campo 'Utiliza algum medicamento? Se sim, quais?' não pode estar vazio");
        return;
    }

    if(!hipertenso){
        alert("O campo'Hipertenso?' deve ser selecionado com sim ou não.");
        return;
    }

    if(!diabetico){
        alert("O campo'Diabético?' deve ser selecionado com sim ou não.");
        return;
    }

    
    alert("Cadastro realizado com sucesso!");

    modal1.close();
    modal2.close();

    formSaudeGeral.submit();
});
