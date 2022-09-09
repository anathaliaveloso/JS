//var agora = new Date()
//var hora = agora.getHours()
// Esses comandos colocam sua hs atual
var hora = 8
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 6 && hora > 0 ){
    console.log ('Boa madrugada!')
} else if (hora<12){
    console.log ('Bom Dia!')
} else if (hora <= 18) {
    console.log ('Boa Tarde!')
}else{
    console.log ('Boa Noite!')
}