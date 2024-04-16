class ContaBancaria {
    constructor() {
        this.saldo = 0
    }

    getSaldo() {
        return this.saldo
    }

    setDepositar(valor) {
        if (valor > 0 || valor == undefined) {
            this.saldo += valor
        } else {
            console.log('Valor inválido, transação cancelada.')
            return false
        }
    }

    setSacar(valor) {
        if (valor <= this.saldo && valor > 0) {
            return this.saldo -= valor
        } else {
            return false
        }
    }
}

const contaBancaria = new ContaBancaria()

// =============================================
console.log(contaBancaria.getSaldo())

contaBancaria.setDepositar()
console.log(contaBancaria)
console.log(contaBancaria.getSaldo())

// contaBancaria.setDepositar(500)
// console.log(contaBancaria)
// console.log(contaBancaria.getSaldo())

// contaBancaria.setSacar(30)
// console.log(contaBancaria)
// console.log(contaBancaria.getSaldo())

// contaBancaria.setSacar(60)
// console.log(contaBancaria)
// console.log(contaBancaria.getSaldo())
