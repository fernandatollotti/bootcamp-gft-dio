// Seleciona os elementos do DOM
let saveButton = document.querySelector('button');
let messageError = document.getElementById('message-error');
let userFeedbackMessage = document.getElementById('user-feedback-message');

// Declaração de variáveis para armazenar os valores dos inputs
let nicknameValue, xpValue;

// Adiciona um disparo de evento para o botão de salvar
saveButton.addEventListener('click', (event) => {
  event.preventDefault() // Previne o comportamento padrão

  // Obtém os valores dos campos de entrada
  nicknameValue = document.getElementById('nickname').value;
  xpValue = document.getElementById('xp').value;

  // Verificar se os campos estão preenchidos
  if (!nicknameValue && !xpValue) {
    messageError.innerHTML = 'Os campos são obrigatórios o preenchimento'; // Exibe mensagem de erro
    setTimeout(clearErrorMessage, 2000); // Limpa a mensagem de erro após 2 segundos
  } else {
    // Define o nível do usuário como 'Não classificado' por padrão
    let userLevel = 'Não classificado';

    // Verifica em qual nível o usuário se enquadra com base na quantidade de XP
    for (let index = 0; index < levels.length; index++) {
      if (xpValue <= levels[index].maxXP) {
        userLevel = levels[index].nameLevel;
        userFeedbackMessage.innerHTML = `O Herói de nome ${nicknameValue} está no nível de ${userLevel}`; // Exibe a mensagem de feedback ao usuário
        break;
      }
    }

    clearInputFields();
  }
});

// Função para limpar a mensagem de erro
function clearErrorMessage() {
  messageError.innerHTML = '';
}

// Função para limpar os campos de entrada
function clearInputFields() {
  document.getElementById('nickname').value = '';
  document.getElementById('xp').value = '';
}
