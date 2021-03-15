function contar() {

var txtInicio = document.getElementById('txtInicio');
var txtFim = document.getElementById('txtFim');
var txtPasso = document.getElementById('txtPasso');

var msg = document.getElementById('msg');


    
    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        alert('[Error] Faltam Dados');
        
    } else {

        

        var numInicio = Number(txtInicio.value);
        var numFim = Number(txtFim.value);
        var numPasso = Number(txtPasso.value);


        msg.innerHTML = `Contando: `;

        for (var i = numInicio ; i <= numFim ; i += numPasso  ) {
            var msg = document.getElementById('msg');
            msg.innerHTML +=  ` ${i} \u{1F449} `

    }

    msg.innerHTML += ` \u{1F3C1}`;


}

}
