var historicoDeOperacoes = [];

function realizaCalculo(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    var operacao = document.getElementById('selecionaOperacao').value;
    var resultado;

    if(isNaN(valor1) || isNaN(valor2)){
        window.alert("não é possível realizar o cálculo");
        return;
    }

    switch(operacao){
        case 'soma':{
            resultado = realizaSoma(valor1, valor2);
            break;
        }
        case 'subtrai':{
            resultado = realizaSubtracao(valor1, valor2);
            break;
        }
        case 'multiplica':{
            resultado = realizaMultiplicacao(valor1, valor2);
            break;
        }
        case 'divide':{
            if(valor2 == 0){
                window.alert("não se pode dividir por zero");
                return;
            }

            resultado = realizaDivisao(valor1, valor2);
            break;
        }
    }

    document.getElementById('mostraResultado').innerHTML = resultado; 

    mostrarHistorico(valor1, valor2, operacao, resultado);
}

function realizaSoma(valor1, valor2){
    return valor1 + valor2;
}

function realizaSubtracao(valor1, valor2){
    return valor1 - valor2;
}

function realizaMultiplicacao(valor1, valor2){
    return valor1 * valor2;
}

function realizaDivisao(valor1, valor2){
    return valor1 / valor2;
}

function mostrarHistorico(valor1, valor2, operacao, resultado){
    var simbolo;

    switch(operacao){
        case 'soma':{simbolo = '+'; break;}
        case 'subtrai':{ simbolo = "-"; break;}
        case 'multiplica':{simbolo = "*"; break;}
        case 'divide':{simbolo = '/'; break;}
    }

    var formatacao = `${valor1} ${simbolo} ${valor2} = ${resultado}`;
    historicoDeOperacoes.unshift(formatacao);

    if(historicoDeOperacoes.length > 5){
        historicoDeOperacoes.pop();
    }

    atualizarHistorico();
}

function atualizarHistorico(){
    var historicoCalculos = historicoDeOperacoes.map(operacao => `<li>${operacao}</li>`).join('');
    document.getElementById('historicoOperacao').innerHTML = historicoCalculos;
}