const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const botaoEntrar = document.querySelector('#botaoEntrar');
const checkAgreement = document.querySelector('#agreement');
const botaoSubmit = document.querySelector('#submit-btn');
const elementTextarea = document.getElementById('textarea');

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
  let contador = document.getElementById('counter');
  contador.innerHTML = '500';
  let numeroMaxCaracteres = elementTextarea.maxLength;
  let numeroCaracteres = elementTextarea.value.length;
  let totalCaracteres = numeroMaxCaracteres - numeroCaracteres;
  contador.innerHTML = JSON.stringify(totalCaracteres);
});
