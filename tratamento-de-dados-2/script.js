
// //parseFloat
 var n1 = Number.parseFloat(window.prompt('Digite o primeiro numero')) 
 var n2 = Number.parseFloat(window.prompt('Digite o segundo numero'))
 var soma =  n1 + n2
 window.alert('A soma dos valores é ' + soma)

// //parseInt
 var n1 = Number.parseInt(window.prompt('Digite o primeiro numero')) 
 var n2 = Number.parseInt(window.prompt('Digite o segundo numero'))
 var soma =  n1 + n2
 window.alert('A soma dos valores é ' + String(soma))

// //Number
 var n1 = Number(window.prompt('Digite o primeiro numero')) 
 var n2 = Number(window.prompt('Digite o segundo numero'))
 var soma =  n1 + n2
 window.alert('A soma dos valores é ' + soma.toString())


//formatando String
var aluno = String(window.prompt('nome do aluno')) 
var n1 = Number(window.prompt('Digite a primeira nota')) 
var n2 = Number(window.prompt('Digite a segunda nota'))
var media =  (n1 + n2)/2
var texto = ("O aluno "+aluno+ ", tirou a media "+media+" como final ")
window.alert(String(texto))

//use crase pra dá certo pelo amor de Deus
//formatando String com Crase
var aluno = String(window.prompt('nome do aluno')) 
var n1 = Number(window.prompt('Digite a primeira nota')) 
var n2 = Number(window.prompt('Digite a segunda nota'))
var media =  (n1 + n2)/2
var texto = (`O aluno ${aluno}, tirou a media ${media} como final `)
window.alert(String(texto))
