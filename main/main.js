function calcularImc() {
    var inPeso = document.getElementById("inPeso").value;
    var inAltura = document.getElementById("inAltura").value;

    var altura = inAltura / 100;
    var peso = inPeso;
    var imc = 0;

    imc = peso / (altura * altura);

    document.getElementById("outImc").value = imc.toFixed();   
}

function calcularIdade() {
    var inNascimento = document.getElementById("inNascimento");
    var dataNascimento = inNascimento.value;
    
    if(dataNascimento.length <= 10) {
        var anoDeNascimento = dataNascimento.substring(0, 4);
        var mesNascimento = dataNascimento.substring(5, 7);
        var diaNascimento = dataNascimento.substring(8, 10);

        var dAtual = new Date();

        var diaAtual = dAtual.getDate();
        var mesAtual = dAtual.getMonth() + 1;
        var anoAtual = dAtual.getFullYear();
        
        var idade = null;


        if (diaAtual >= diaNascimento && mesAtual >= mesNascimento) {
            idade = anoAtual - anoDeNascimento;
        } else if (diaAtual <= diaNascimento && mesAtual <= mesNascimento  || (mesAtual < mesNascimento)) {
            idade = (anoAtual - anoDeNascimento) -1;
        } 
        document.getElementById("outIdade").value = idade;
    } else {
        alert("Verifique o preenchimento dos campos.");
        inNascimento.focus();
    }

    console.log(inNascimento.value);
}

function preencherUf() {
    var slEstados = document.getElementById("slEstados").value;
    document.getElementById("outUf").value = slEstados;
}

function habilitaCampoAtividade(){
    var rdAtivS = document.getElementById("rdAtivS").value;
    var inAtiv = document.querySelector("#inAtiv");

    if (rdAtivS == "s") {
        inAtiv.disabled = false;
    }
    console.log(rdAtivS)
}

function desabilitaCampoAtividade(){
    var rdAtivN = document.getElementById("rdAtivN").value;
    var inAtiv = document.querySelector("#inAtiv");

    if (rdAtivN == "n") {
        inAtiv.disabled = true;
    } 

    console.log(rdAtivN)
}

function habilitaCampoCirurgia(){
    var rdCirurgS = document.getElementById("rdCirurgS").value;
    var inCirurg = document.getElementById("inCirurg");

    if (rdCirurgS == "s") {
        inCirurg.disabled = false;
    }
}

function desabilitaCampoCirurgia(){
    var rdCirurgN = document.getElementById("rdCirurgN").value;
    var inCirurg = document.getElementById("inCirurg");

    if (rdCirurgN == "n") {
        inCirurg.disabled = true;
    } 
}

function habilitaCampoLesao(){
    var rdLesaoS = document.getElementById("rdLesaoS").value;
    var infLesao = document.getElementById("infLesao");

    if (rdLesaoS == "s") {
        infLesao.disabled = false;
    }
}

function desabilitaCampoLesao(){
    var rdLesaoN = document.getElementById("rdLesaoN").value;
    var infLesao = document.getElementById("infLesao");

    if (rdLesaoN == "n") {
        infLesao.disabled = true;
    } 
}

function habilitaCampoComorbidade(){
    var rdComorbS = document.getElementById("rdComorbS").value;
    var infComorb = document.getElementById("infComorb");

    if (rdComorbS == "s") {
        infComorb.disabled = false;
    }
}

function desabilitaCampoComorbidade(){
    var rdComorbN = document.getElementById("rdComorbN").value;
    var infComorb = document.getElementById("infComorb");

    if (rdComorbN == "n") {
        infComorb.disabled = true;
    } 
}
