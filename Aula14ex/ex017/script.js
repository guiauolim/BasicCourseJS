function gerarTabela() {
    var txtNum = document.getElementById('txtNum');
    var msg = document.getElementById('seltab');



    if (txtNum.value.length == 0 ) {
        alert('É necessário que adicione um número ao campo!');
    } else {
        var numero = Number(txtNum.value);
        
        msg.innerHTML = '';
        for (var i = 1 ; i < 11 ; i++) {
            var item = document.createElement('option');

            item.text = `${numero} x ${i} = ${i*numero}`
            msg.appendChild(item); 

        }
        
    }
    
}