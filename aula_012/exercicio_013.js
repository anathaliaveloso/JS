var agora = new Date ()
var diaSem = agora.getDay()
/*
Para o JS os dias da Semana são:
0 - Domingo
1 - Segunda
2 - Terça e assim por diante
*/
 switch(diaSem){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        consolelog('[ERROR] Dia Inválido!')
        break
 }