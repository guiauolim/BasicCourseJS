function verificar () {

    var msg = document.getElementById('msg');

    var txtAno = document.getElementById('txtAnoN');
   
    var data = new Date();
    

    var sexo = document.getElementsByName('txtSexo');
    
    
    // Tratando os erros!
        if (txtAno.value < 0) {
           msg.innerHTML = `Ano de nascimento inválido!`
           return;
        } 
        if (txtAno.value > data.getFullYear() || txtAno.value.length == 0) {
            msg.innerHTML = `Ano de nascimento inválido!`
            
        } else {
            var anoNascimento = Number(txtAno.value);
            var idade = data.getFullYear() - anoNascimento;
            var img = document.createElement('img');
            img.setAttribute('id', 'foto'); 
            var genero = "";

            if (sexo[0].checked) {
                genero = 'Homem';

                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'crianca.jpg')
    
                } else if (idade < 21 ) {
                    alert(`Adolescente`);
                } else if (idade < 50 ) {
                    alert(`Adulto`);
                } else {
                    alert(`idoso`); 
                }

            } else if (sexo[1].checked) {
                genero = 'Mulher'

                if (idade > 0 && idade < 12) {
                    img.src = 'crianca.png';
    
                } else if (idade >= 18 && idade < 60 ) {
                    msg.innerHTML = `Adulto aqui`;
                } else if (idade >= 60 ) {
                    msg.innerHTML = `idoso aqui`
                } else {
                    msg.innerHTML = `Adoslescente`
                }
            }

            
 
            msg.style.textAlign = 'center'
            msg.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos! `
            msg.appendChild(img);  
        }
        
        
    

 
}