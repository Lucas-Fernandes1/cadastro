function calcularImc() {

    var inPeso = document.getElementById("inPeso").value;
    var inAltura = document.getElementById("inAltura").value;

    var altura = inAltura / 100;
    var peso = inPeso;
    var imc = 0;

    imc = peso / (altura * altura);

    document.getElementById("outImc").value = imc.toFixed(2);   
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

function habilitaCampo(){
    
}
