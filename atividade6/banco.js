let input = document.getElementById('valor')
const depositoBtn = document.getElementById('deposito_btn')
const saqueBtn = document.getElementById('saque_btn')
let saldo = document.getElementById('saldo')
let saldoMessage = document.getElementById('saldo_message')

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

function converteParaNumber(valor) {
    return parseFloat(valor.replace(',', '.'))
}

function converteValorComVirgula(valor) {
    return valor.replace('.', ',')
}

function depositoSucesso(message) {
    message.innerText = 'Depósito realizado com sucesso!'
    message.style.color = 'green';
    return
}

function saqueSucesso(message) {
    message.innerText = 'Saque realizado com sucesso!'
    message.style.color = 'green';
    return
}

function saldoInsuficiente(message) {
    message.innerText = 'Saldo insuficiente!'
    message.style.color = 'orange';
    return
}

function valorInvalido(message) {
    message.innerText = 'Valor inválido, tente novamente!'
    message.style.color = 'red';
    return
}

depositoBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const valorInformado = input.value
    valor = converteParaNumber(valorInformado)

    if (!isNaN || valor > 0) {
        const deposito = contaBancaria.setDepositar(valor).toFixed(2)
        saldo.innerText = converteValorComVirgula(deposito)
        depositoSucesso(saldoMessage)
    } else {
        valorInvalido(saldoMessage)
    }
})

saqueBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const valorInformado = input.value
    valor = converteParaNumber(valorInformado)

    const saldoAtual = contaBancaria.getSaldo()

    if (valor > 0 && valor <= saldoAtual || !isNaN) {
        const saque = contaBancaria.setSacar(valor).toFixed(2)
        saldo.innerText = converteValorComVirgula(saque)
        saqueSucesso(saldoMessage)
    } else if (valor > saldoAtual) {
        saldoInsuficiente(saldoMessage)
    } else {
        valorInvalido(saldoMessage)
    }
})

