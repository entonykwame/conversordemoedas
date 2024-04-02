function converter() {
    var reais = document.getElementById('reais').value;
    var taxaDeCambio = 5.06; // Você pode substituir isso pela taxa de câmbio atual

    var dolares = reais / taxaDeCambio;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = reais + ' reais equivalem a ' + dolares.toFixed(2) + ' dólares.';
}

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})
