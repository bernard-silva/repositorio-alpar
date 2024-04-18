// Instancia a classe para cada cômodo
const salaObserver = new LuzObserver('sala', document.getElementById('sala-status'), document.getElementById('sala'));
const cozinhaObserver = new LuzObserver('cozinha', document.getElementById('cozinha-status'), document.getElementById('cozinha'));
const quartoObserver = new LuzObserver('quarto', document.getElementById('quarto-status'), document.getElementById('quarto'));
const banheiroObserver = new LuzObserver('banheiro', document.getElementById('banheiro-status'), document.getElementById('banheiro'));

// Inscreve cada cômodo no Observers da classe ControleIluminacao
ControleIluminacao.instance.addObserver(salaObserver);
ControleIluminacao.instance.addObserver(cozinhaObserver);
ControleIluminacao.instance.addObserver(quartoObserver);
ControleIluminacao.instance.addObserver(banheiroObserver);

// Função que chama o método toggle da classe ControleIluminacao
function toggleLight(codigoComodo) {
    ControleIluminacao.instance.toggleLight(codigoComodo);
}