function inverteString(string){
  let array = string.split("");
  let auxliar;
  let inicio = 0
  let fim = array.length-1
  let arrayInvertido = []

  for(let i=0; i<array.length;i++){
    auxliar = array[inicio]
    arrayInvertido.push(array[fim])
    inicio++;
    fim--;
  }
  
  return arrayInvertido.join('')
}


console.log(inverteString("Rafael do Nascimento Santos"))