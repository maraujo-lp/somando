function calcular() {
    let n1 = document.getElementById(`num`).value
    let n2 = document.getElementById(`num2`).value
    let mouse = document.getElementById(`events`)
    let res = document.getElementById(`res`)
    let num = parseInt(n1)
    let num2 = parseInt(n2)



    if (!isNaN(num) && !isNaN(num2)) {
        let soma = num + num2
        res.innerHTML = `o resultado da soma: <br> ${num} + ${num2} = ${soma}`

    } else {

        res.innerHTML = `preencha os dados`

    }

}
