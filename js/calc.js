const form = document.querySelector('#form-calculadora');
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculaAcessibilidade();
});

function calculaAcessibilidade() {
  let pontuacao = 0;

  const criterios = document.querySelectorAll('.criterio');
  criterios.forEach(c => pontuacao += parseInt(c.value));

  const percentual = pontuacao / criterios.length * 100;

  const resultEl = document.querySelector('#result');
  resultEl.textContent = `A acessibilidade do estabelecimento é de ${percentual}%`;

  var modalPontuacao = new bootstrap.Modal(document.getElementById('modalPontuacao'), {});
  modalPontuacao.show();

}

