function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[erro] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex') //0 ou 1
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }

}