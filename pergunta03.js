let diasJSON = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

let maiorFaturamentoDia = 0;
let maiorFaturamento = 0;
let menorFaturamentoDia = 0;
let menorFaturamento = 0;


//maior
for(let valor of diasJSON){
  if(valor.valor > maiorFaturamento){
    maiorFaturamento = valor.valor
    maiorFaturamentoDia = valor.dia
  }
  menorFaturamento = maiorFaturamento
}

//menor
for(let valor of diasJSON){
  if(valor.valor > 0 && valor.valor < menorFaturamento){
    menorFaturamento = valor.valor
    menorFaturamentoDia = valor.dia
  }
}

//adquirir media mensal
let contaDias = 0
let valorTotal = 0
let media = 0
for(let valor of diasJSON){
  if(valor.valor > 0){
    contaDias += 1
    valorTotal += valor.valor
    media = valorTotal / contaDias
  }
}

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal
let dias = [];
for(let dia of diasJSON){
  if(dia.valor > media){
    dias.push(dia.dia)
  }
}

//console.log("dia do menor faturamento: "+menorFaturamentoDia)
console.log("valor do menor faturamento: "+menorFaturamento)

//console.log("dia do maior faturamento: "+maiorFaturamentoDia)
console.log("valor do maior faturamento: "+ maiorFaturamento)

console.log("Dias em que o faturamento foi maior do que a média mensal: "+dias)


