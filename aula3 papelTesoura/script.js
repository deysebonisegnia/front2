function iniciaJogo() {
    let escolhaJogador = parseInt(prompt('Escolha entre 1) pedra, 2) papel e 3)tesoura: '));
    let escolhaComputador = Math.ceil(Math.random()*3);

    switch(escolhaJogador ){
        case 1:escolhaJogador = "Pedra"; break;
        case 2:escolhaJogador = "Papel"; break;
        case 3:escolhaJogador = "Tesoura"; break;
       
        default: escolhaJogador = "opção invalida";
    }
    switch(escolhaComputador){
        case 1:escolhaComputador = "Pedra"; break;
        case 2:escolhaComputador = "Papel"; break;
        case 3:escolhaComputador = "Tesoura"; break;
        default: escolhaComputador = "opção invalida";
    
    }
  
    
    if(escolhaJogador === 1 && escolhaComputador === 3) {
      console.log('Você ganhou do computador')
    } else if(escolhaJogador === 1 && escolhaComputador === 2) {
      console.log('Computador ganhou')
    } else if(escolhaJogador === 2 && escolhaComputador === 3) {
      console.log('Computador ganhou')
    } else if(escolhaJogador === 2 && escolhaComputador === 1) {
      console.log('Você ganhou')
    } else if(escolhaJogador === 3 && escolhaComputador === 1) {
      console.log('Computador ganhou')
    } else if(escolhaJogador === 3 && escolhaComputador === 2) {
      console.log('Você ganhou')
    } else if (escolhaJogador === escolhaComputador) {
      console.log('Empate')
    }
    console.log({ escolhaJogador, escolhaComputador })
  }
  
  iniciaJogo();



  

