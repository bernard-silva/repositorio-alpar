class AutomacaoLuzes {
    static instance
    observers = []
    room = false
    kitchen = false

    toggle(convenient) {
        console.log('toggle')
        if (convenient == 'room') {
            this.room = !this.room
        } else if (convenient == 'kitchen') {
            this.kitchen = !this.kitchen
        }

        this.executar()
    }

    getState(convenient) {
        console.log('getState')
        if (convenient == 'room') {
            return this.room
        } else if (convenient == 'kitchen') {
            return this.kitchen
        }
    }

    inscrever(funcao) {
        console.log('inscrever a funcao')
        this.observers.push(funcao)
        console.log(this.observers)
    }

    executar() {
        console.log('executar')
        this.observers.forEach((funcao) => {
            funcao()
        })
        console.log(this.observers)
    }
}

AutomacaoLuzes.instance = new AutomacaoLuzes()
console.log('instanciado')
