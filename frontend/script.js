// Função para verificar se todos os campos obrigatórios foram preenchidos //
function validar(){

    var nome = document.getElementById("nome");
    var endereco = document.getElementById("endereco");
    var num = document.getElementById("num");
    var bairro = document.getElementById("bairro");
    var cep = document.getElementById("cep");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var celular = document.getElementById("celular");
    var cpf = document.getElementById("cpf");

    // verificação campo a campo
    if (nome.value == "") {
        alert("Nome não informado - Está informação é obrigatória!");
        nome.focus();  // Deixa o input com o focus
        return;  // retorna a função e não olha as outras linhas
    }
    if (celular.value == "") {
        alert("Celular não informado - Está informação é obrigatória! Caso não possua, informa um celular para recado");
        celular.focus();
        return;
    }
    if (logradouro.value == "") {
        alert("Endereço não informado - Está informação é obrigatória!");
        endereco.focus();
        return;
    }
    if (num.value == "") {
        alert("Número da localidade não informado - Está informação é obrigatória!");
        num.focus();
        return;
    }
    if (bairro.value == "") {
        alert("Bairro não informado - Está informação é obrigatória!");
        bairro.focus();
        return;
    }
    if (cep.value == "") {
        alert("CEP não informado - Está informação é obrigatória!");
        cep.focus();
        return;
    }
    if (localidade.value == "") {
        alert("Cidade não informada - Está informação é obrigatória!");
        cidade.focus();
        return;
    }
    if (uf.value == "") {
        alert("Informe seu Estado!");
        estado.focus();
        return;
    }
    if (cpf.value == "") {
        alert("CPF não informado - Está informação é obrigatória!");
        cpf.focus();
        return;
    }
    return true;
}
    
// Algoritmo validador de CPF //
function validaCPF(){
    var cpf = document.getElementById("cpf").value;
   
    if (cpf.length != 11 || // Primeira validação pela quantidade de números e repetições
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") { 
        return false;
    }
    else {
        var numeros = cpf.substring(0,9); //Validação do primeiro dígito
        var digito = cpf.substring(9);
        var soma = 0;

        for (var i = 10; i > 1; i--){
            soma +=  numeros.charAt(10 - i) * i;
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); //Pergunta junto com uma operação matemática, com uma ação para resposta positiva (até os :), e outra ação para a resposta negativa (após :)

        if (resultado != digito.charAt(0)){ //Busca a posição 0 do dígito
            return false;
        }   

    soma = 0; // Resetar a variável soma
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--){ // Validação do segundo dígito
        soma += numeros.charAt(11 - k) * k;0
    }

    resultado = (soma % 11) > 2 ? 0 : 11 - (soma % 11);
    if (resultado != digito.charAt(1)){
        return true;
    }
    else {
        return false;
    }
    }
}

// Executar todas as funções e emitir alerta de envio do form //
function validacao(){
    var verificador = validar ();
    var resultadoValidacao = validaCPF (cpf);

    if (verificador == true){
        if (resultadoValidacao == true){
            alert ("Seu formulário foi enviado com sucesso. Parabéns, você deu o primeiro passo na direção do seu futuro!");
        } 
        else {
            alert("CPF informado não é válido!");
        }
    }
}

// Abrir nova aba para pesquisar o CEP
function abreaba(){
    window.open("https://buscacepinter.correios.com.br/app/endereco/index.php");
}

