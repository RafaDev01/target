function pesquisaFibonacci(valorProcurado){
  let valorExistente = false
  let sequencia = [0,1,1];
  let cont = 2
  let anterior = 0;
  let prox = 0;
  while(prox < valorProcurado){
    anterior = sequencia[cont - 1]
    prox = sequencia[cont]
    sequencia.push(anterior + prox)
    if(valorProcurado == prox){
      valorExistente = true;
    }
    cont++
  }
  console.log(sequencia)
  if(valorExistente == true){
    console.log("O valor procurado existe na sequencia")
  }else{
    console.log("Valor peocurado inexistente")
  }
}

pesquisaFibonacci(143)

