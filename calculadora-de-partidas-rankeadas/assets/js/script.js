// Seleciona os elementos do DOM
let saveButton = document.querySelector('button');
let errorMessage = document.getElementById('message-error');
let feedbackMessage = document.getElementById('feedback-message');

// Declaração de variáveis para armazenar os valores dos inputs
let victoryValue, defeatsValue;

// Adiciona um disparo de evento para o botão de salvar
saveButton.addEventListener('click', (event) => {
  event.preventDefault() // Previne o comportamento padrão

  // Obtém os valores dos campos de entrada
  victoryValue = document.getElementById('victory').value;
  defeatsValue = document.getElementById('defeats').value;

  // Verificar se os campos estão preenchidos
  if (!victoryValue && !defeatsValue) {
    errorMessage.innerHTML = 'Os campos são obrigatórios o preenchimento'; // Exibe mensagem de erro
    setTimeout(clearErrorMessage, 2000); // Limpa a mensagem de erro após 2 segundos
  } else {
    // Define o nível do usuário como 'Não classificado' por padrão
    let userLevel = 'Não classificado';
    let netWins = calculateNetWins(victoryValue, defeatsValue);

    // Verifica em qual nível o usuário se enquadra com base na quantidade de vitórias do jogador
    for (let index = 0; index < levels.length; index++) {
      if (netWins <= levels[index].requiredVictories) {
        userLevel = levels[index].levelName;
        feedbackMessage.innerHTML = `O Herói tem de saldo de ${netWins} está no nível de ${userLevel}`; // Exibe a mensagem de feedback ao usuário
        break;
      }
    }

    clearInputFields();
  }
});

/**
 * Função que calcula o saldo de vitórias e derrotas.
 * 
 * @param {number} victory - O número total de vitórias.
 * @param {number} defeats - O número total de derrotas.
 * @returns {number} - O saldo resultante da subtração das derrotas das vitórias.
 */
function calculateNetWins(victory, defeats) {
  let resultVictory = victory - defeats;
  return resultVictory;
}

// Função para limpar a mensagem de erro
function clearErrorMessage() {
  errorMessage.innerHTML = '';
}

// Função para limpar os campos de entrada
function clearInputFields() {
  document.getElementById('victory').value = '';
  document.getElementById('defeats').value = '';
}