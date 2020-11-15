window.onload = function () {
    const inputMin = document.querySelector('.input-min')
    const inputMax = document.querySelector('.input-max')
    const botao = document.querySelector('.botao')
    const resultado = document.querySelector('.resultado')

    botao.addEventListener('click', function () {
        let min = Number(inputMin.value)
        let max = Number(inputMax.value)

        if (min > max) {
            resultado.innerHTML = 'O valor minimo é maior que o maximo'
        } else {
            let dif = max - min
            let calculo = ''

            for (let i = 1; i < dif; i++) {
                if (i != 1) {
                    calculo += ', '
                }
                calculo += min + i
            }
            resultado.innerHTML = calculo
        }
    })
}
