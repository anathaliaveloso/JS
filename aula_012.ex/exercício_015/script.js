function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'menino.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_h.jpg')

            } else if (idade <59){
                img.setAttribute('src', 'adulto.png' )

            } else {
                img.setAttribute('src','idoso.jpg')

            }

        } else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade < 10){
                img.setAttribute('src','menina.jpg')
    
            } else if (idade < 21) {
                img.setAttribute('src','jovem_m.png')
                
    
            } else if (idade <59){
                img.setAttribute('src','adulta.png')
    
            } else {
                img.setAttribute('src','idosa.png')
                
                    
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 