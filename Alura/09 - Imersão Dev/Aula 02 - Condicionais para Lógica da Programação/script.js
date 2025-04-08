// Solicita a idade do usuário
idade = prompt("Quantos anos você tem?")

// Verifica se a idade é menor que 18
if (idade < 18) {
  // Mostra um alerta informando que não é permitido jogar
  alert("Você NÃO pode jogar jokenpo.")
}

// Verifica se a idade é maior ou igual a 18
if (idade >= 18) {

  // Solicita a escolha do jogador: 1-Pedra, 2-Papel ou 3-Tesoura
  escolha = prompt("Faça uma escolha: 1-Pedra, 2-Papel e 3-Tesoura ")

  // Gera uma escolha aleatória para o computador (entre 1 e 3)
  escolhaComput = Math.floor(Math.random() * 3) + 1;

  // Verifica se o jogador escolheu Papel (2)
  if (escolha == 2) {
    
    // Se o computador escolheu Pedra (1), o jogador vence
    if (escolhaComput == 1) {
      alert("Jogador Venceu, computador Pedra!!!");
    }

    // Se o computador escolheu Tesoura (3), o computador vence
    if (escolhaComput == 3) {
      alert("Computador venceu, escolheu tesoura!");
    }
  }

}
