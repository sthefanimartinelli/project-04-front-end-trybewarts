const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const botaoEntrar = document.querySelector('#botaoEntrar');

botaoEntrar.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
