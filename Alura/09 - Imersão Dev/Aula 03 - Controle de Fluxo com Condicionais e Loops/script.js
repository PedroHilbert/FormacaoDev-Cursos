/*

Pontos importantes:
Uso de while: ótimo pra repetir algo até uma condição deixar de ser verdadeira.

prompt: usado pra pegar o input do jogador.

Math.floor(Math.random() * 3) + 1: gera um número aleatório de 1 a 3.

Estrutura condicional if: pra verificar se o jogador escolheu o piso certo ou caiu no quebrado.

O rodada = 100 é uma estratégia pra "quebrar" o loop quando o jogador perde.

*/
// Começa na rodada 1
rodada = 1

// Enquanto a rodada for menor ou igual a 3, o jogo continua
while(rodada <= 3) {
  console.log("Rodada: " + rodada) // Só pra mostrar no console em que rodada tá

  // Jogador escolhe uma ponte (1, 2 ou 3)
  escolhaJogador = prompt("Nivel " + rodada + ", (1, 2 ou 3)?")

  // O jogo sorteia aleatoriamente qual piso está quebrado
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;

  // Se o jogador escolher o piso quebrado, ele perde
  if (escolhaJogador == pisoQuebrado) {
    alert("Você quebrou") // mensagem de derrota
    rodada = 100; // força a saída do loop, já que perdeu
  } else {
    // Se não for o piso quebrado, avisa que passou e mostra onde estava o quebrado
    alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
  }

  // Avança pra próxima rodada
  rodada = rodada + 1
}

// Se conseguiu passar pelas 3 rodadas, mostra mensagem de vitória
if(rodada == 4) {
  alert("Você venceu! Parabéns!")
}

