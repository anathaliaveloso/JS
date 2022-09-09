function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Olá! Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        //BOM DIA
        img.src = "manha.png"
        document.body.style.background = '#A1B4BB'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = '#7BCCE1'
    } else {
        //BOA NOITE
        img.src = "noite.png"
        document.body.style.background = "#153343"
    }
}