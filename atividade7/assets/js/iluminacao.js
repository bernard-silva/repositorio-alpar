class ControleIluminacao {
    // Propriedade estática instance (por enqto do tipo any) usada para facilitar o acesso global à instância a partir dela
    static instance

    constructor() {
        // Guarda como um Objeto o código do Cômodo e seu Status booleano
        this.luzes = {};
        // Inicializa o Observers
        this.observers = [];
    }

    // Inscreve cada cômodo no Observers
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Ao percorrer o array de Observers, chama a instância de cada cômodo da classe LuzObserver executando o método update dela
    notifyObservers(codigoComodo, estado) {
        this.observers.forEach(observer => observer.update(codigoComodo, estado));
    }

    // Troca o Status de cada cômodo do Observers no objeto luzes
    toggleLight(codigoComodo) {

        // (Switch - Inicio) - Lógica para Validar e trocar valores Booleanos
        // Condição inicia como (!undefined == true), e nas próximas faz um switch conforme o valor atual
        if (!this.luzes[codigoComodo]) {
            this.luzes[codigoComodo] = false;
        }
        this.luzes[codigoComodo] = !this.luzes[codigoComodo];
        // (Switch - Fim)

        // Chama o método passando cômodo e status
        this.notifyObservers(codigoComodo, this.luzes[codigoComodo]);
    }
}

class LuzObserver {
    // Inicializa as propriedades de cada instância
    constructor(codigoComodo, statusElement, divElement) {
        this.codigoComodo = codigoComodo;
        this.statusElement = statusElement;
        this.divElement = divElement;
    }

    // Recebe valores e valida código e status do cômodo chamando outros métodos
    update(codigoComodo, estado) {
        if (this.codigoComodo === codigoComodo) {
            this.updateStatus(estado);
            this.updateBackground(estado);
        }
    }

    // Atualiza o status na div de class="status" correspondente
    updateStatus(estado) {
        this.statusElement.innerText = estado ? 'Ligada' : 'Desligada';
    }

    // Atualiza o status na div do id correspondente
    updateBackground(estado) {
        this.divElement.style.backgroundColor = estado ? 'yellow' : 'black';
        this.divElement.style.color = estado ? 'black' : 'white';
    }
}

// Inicialização da instância como Singleton a partir da propriedade static instance
ControleIluminacao.instance = new ControleIluminacao();
