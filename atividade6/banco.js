class ContaBancaria {
    constructor() {
        this.saldo = 0
    }

    getSaldo() {
        return this.saldo
    }

    setDepositar(valor) {
        if (valor > 0) {
            return this.saldo += valor
        } else {
            return false
        }
    }

    setSacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            return this.saldo -= valor
        } else {
            return false
        }
    }
}

const contaBancaria = new ContaBancaria()

let input = document.getElementById('valor')
const depositoBtn = document.getElementById('deposito_btn')
const saqueBtn = document.getElementById('saque_btn')
let saldo = document.getElementById('saldo')
let saldoMessage = document.getElementById('saldo_message')

depositoBtn.addEventListener('click', (e) => {
    e.preventDefault()

    valor = parseFloat(input.value)
    console.log(valor)

    if (!isNaN || valor > 0) {
        const deposito = parseFloat(contaBancaria.setDepositar(valor))
        saldo.innerText = deposito
        saldoMessage.innerText = 'Depósito realizado com sucesso!'
        saldoMessage.style.color = 'green';
    } else {
        saldoMessage.innerText = 'Valor inválido, tente novamente!'
        saldoMessage.style.color = 'red';
    }

    // console.log(valor)
    // console.log(contaBancaria)
})

saqueBtn.addEventListener('click', (e) => {
    e.preventDefault()

    valor = parseFloat(input.value)
    console.log(valor)

    const saldoAtual = contaBancaria.getSaldo()
    if (valor > 0 && valor <= saldoAtual || !isNaN) {
        const saque = parseFloat(contaBancaria.setSacar(valor))
        saldo.innerText = saque
        saldoMessage.innerText = 'Saque realizado com sucesso!'
        saldoMessage.style.color = 'green';
    } else if (valor > saldoAtual) {
        saldoMessage.innerText = 'Saldo insuficiente!'
        saldoMessage.style.color = 'orange';
    } else {
        saldoMessage.innerText = 'Valor inválido, tente novamente!'
        saldoMessage.style.color = 'red';
    }

    // console.log(valor)
    // console.log(contaBancaria)
})

