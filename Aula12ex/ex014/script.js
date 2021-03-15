function carregar () { 
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `<p>São exatamente ${hora} horas!</p>`


    if (hora >= 0 && hora < 12) {
        // BOM DIA
        window.document.body.style.background = 'gray'
        img.src = 'manha.jpg';
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        window.document.body.style.background = 'rgb(128, 85, 7)'
        img.src = 'tarde.jpg';
    } else {
        // BOA NOITE
        window.document.body.style.background = 'rgb(17, 17, 88)';
        img.src = 'noite.jpg';

    }

}