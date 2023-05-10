import data from '../questions.json' assert { type: 'json'};

data.forEach((question) => {
  const currentQuestion = getQuestionTemplate(question);
  document.querySelector('#question-container').insertAdjacentHTML('beforeend', currentQuestion);
})

function getQuestionTemplate(question) {

  return `
  <div class="mb-3">
      <label class="form-label">${question.description}</label>
      <select class="form-select criterio" required>
          <option value="" selected disabled>Selecione</option>
          <option value="1">Sim</option>
          <option value="0">Não</option>
      </select>
  </div>`;
}
