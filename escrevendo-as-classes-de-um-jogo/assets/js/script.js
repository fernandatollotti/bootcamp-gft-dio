// Seleciona os elementos do DOM
const saveButton = document.querySelector('button');
const cardHero = document.querySelector('article');
const message = document.getElementById('message');
const errorMessage = document.getElementById('message-error');
const heroNameInput = document.getElementById('character-name');
const heroAgeInput = document.getElementById('character-age');
const chosenHero = document.getElementById('characters');
const heroNameDisplay = document.getElementById('name');
const heroAgeDisplay = document.getElementById('age');
const heroAvatar = document.querySelector('img');

class Hero {
  constructor(heroName, heroAge, heroType) {
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.heroType = heroType
  }

  attack() {
    let heroPower;

    switch(this.heroType) {
      case 'mago':
        this.heroPower = 'magia';
        break;
      case 'guerreiro':
        this.heroPower = 'espada';
        break;
      case 'ninja':
        this.heroPower = 'shuriken';
        break;
      case 'monge':
        this.heroPower = 'artes maciais';
        break;
    } 

    message.innerHTML = `O ${this.heroType} atacou usando ${this.heroPower}`;
  }
}

// Evento para o botão de salvar
saveButton.addEventListener('click', (event) => {
  event.preventDefault(); // Previne o comportamento padrão do botão

  // Validação de campos obrigatórios
  if(!heroNameInput.value || !heroAgeInput.value) {
    errorMessage.innerHTML = 'Os campos são obrigatórios'; // Exibe mensagem de erro
    setTimeout(clearErrorMessage, 2000); // Limpa a mensagem após 2 segundos
    return; // Interrompe a execução se houver erro
  } 

  cardHero.style.display = 'block'; // Exibi o card do herói escolhido

  // Cria uma nova instância de Hero com os valores dos campos
  let hero = new Hero(heroNameInput.value, heroAgeInput.value, chosenHero.value);
  let imageSrc = `assets/images/${chosenHero.value}.png`; // Caminho da imagem do herói

  heroNameDisplay.innerHTML = hero.heroName; // Exibe o nome do herói
  heroAgeDisplay.innerHTML = hero.heroAge; // Exibe a idade do herói
  heroAvatar.setAttribute('src', imageSrc); // Define a imagem do herói

  // Chama o método de ataque do herói
  hero.attack()

  // Função para limpar os campos de entrada de dados após salvar
  clearInputFields();
});

// Função para limpar a mensagem de erro
function clearErrorMessage() {
  errorMessage.innerHTML = '';
}

// Função para limpar os campos de entrada
function clearInputFields() {
  document.getElementById('character-name').value = '';
  document.getElementById('character-age').value = '';
}