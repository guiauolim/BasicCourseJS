let txtNum = document.getElementById('txtNum');
let txtCaixa = document.getElementById('txtCaixa');
let msg = document.getElementById('msg');
let valores = [];



function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true;
    } else {
        return false;
    }
}


function inList (n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}




function adicionar () {
    if ( isNumero(txtNum.value) && !inList(txtNum.value, valores)) {
        let item = document.createElement('option');
        valores.push(Number(txtNum.value));
        item.text = `Foi adicionado o ${txtNum.value}`;
        txtCaixa.appendChild(item);
        msg.innerHTML = '';
        
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    txtNum.value = '';
    txtNum.focus();
}    

function finalizar () {
    if (valores.length == 0) {
        alert('Digite um dado!')
    } else {
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        

        for (let i = 0 ; i < valores.length ; i++) {
            if (valores[i] > maior) {
                maior = valores[i]   
        } 
            if (valores[i] < menor) {
                menor = valores[i]
            }

        soma += valores[i];
     }    
        msg.innerHTML =   `<p>Ao todo, temos ${valores.length} números cadastrados </p>`
        msg.innerHTML +=  `<p>O maior valor é: ${maior}</p>`;
        msg.innerHTML +=  `<p>O menor valor é: ${menor}</p>`;
        msg.innerHTML +=  `<p>A soma dos números listados é: ${soma}</p>`;
        msg.innerHTML +=  `<p>A media dos números listados é: ${soma / valores.length}</p>`;


        

}
}
    

