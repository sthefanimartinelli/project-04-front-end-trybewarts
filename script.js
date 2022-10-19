const inputEmail = document.getElementById('meu-email');
const inputSenha = document.getElementById('input-senha');
const botaoEntrar = document.querySelector('#botaoEntrar');
const checkAgreement = document.querySelector('#agreement');
const botaoSubmit = document.querySelector('#submit-btn');
const elementTextarea = document.getElementById('textarea');
const emailDigitado = document.getElementById('input-email');
const nomeDigitado = document.getElementById('input-name');
const sobrenomeDigitado = document.getElementById('input-lastname');
const casaSelecionada = document.querySelector('#house');
const comentario = document.querySelector('textarea');
const primeiroForm = document.getElementById('evaluation-form');
const formularioDados = document.getElementById('form-data');
const nomeInserido = document.getElementById('nome-inserido');
const emailInserido = document.getElementById('email-inserido');
const casaInserida = document.getElementById('casa-inserida');
const familiaInserida = document.getElementById('familia-inserida');
const materiasInseridas = document.getElementById('materias-inseridas');
const avaliacaoInserida = document.getElementById('avaliacao-inserida');
const comentarioInserido = document.getElementById('comentario-inserido');

botaoEntrar.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkAgreement.addEventListener('change', () => {
  botaoSubmit.disabled = !checkAgreement.checked;
});

elementTextarea.addEventListener('keyup', () => {
  const contador = document.getElementById('counter');
  contador.innerHTML = '500';
  const numeroMaxCaracteres = elementTextarea.maxLength;
  const numeroCaracteres = elementTextarea.value.length;
  const totalCaracteres = numeroMaxCaracteres - numeroCaracteres;
  contador.innerHTML = JSON.stringify(totalCaracteres);
});

const selectedSubjects = () => {
  const materiasSelecionadas = document.querySelectorAll('input[class="subject"]:checked');
  let arrayMaterias = '';
  for (let index = 0; index < materiasSelecionadas.length; index += 1) {
    arrayMaterias = `${arrayMaterias} ${(materiasSelecionadas[index].value)},`;
  }
  return arrayMaterias;
};

botaoSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const familiaSelecionada = document.querySelector('input[name="family"]:checked');
  const notaSelecionada = document.querySelector('input[name="rate"]:checked');
  // selectedSubjects();

  primeiroForm.style.display = 'none';
  formularioDados.style.display = 'flex';
  formularioDados.style.backgroundColor = 'orange';
  nomeInserido.innerHTML = `Nome: ${nomeDigitado.value} ${sobrenomeDigitado.value}`;
  emailInserido.innerHTML = `Email: ${emailDigitado.value}`;
  casaInserida.innerHTML = `Casa: ${casaSelecionada.value}`;
  familiaInserida.innerHTML = `Família: ${familiaSelecionada.value}`;
  materiasInseridas.innerHTML = `Matérias: ${selectedSubjects()}`;
  avaliacaoInserida.innerHTML = `Avaliação: ${notaSelecionada.value}`;
  comentarioInserido.innerHTML = `Observações: ${comentario.value}`;
});
