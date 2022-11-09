let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53

let totalFaturado = [sp,rj,mg,es,outros]
let total = 0
for(let valor of totalFaturado){
  total += valor
}

//contruibuição em porcentagem
let spPocentagem = sp*100 / total
let rjPorcentagem = rj*100 / total
let mgPorcentagem = mg*100 / total
let esPorcentagem = es*100 / total
let outrosPorcentagem = outros*100 / total

console.log(spPocentagem)
console.log(rjPorcentagem)
console.log(mgPorcentagem)
console.log(esPorcentagem)
console.log(outrosPorcentagem)