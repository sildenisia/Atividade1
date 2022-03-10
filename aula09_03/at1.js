const listadepecas = ['pecas de teste', 'AB', 'peca B'];

//console.log('quantidade de caracteres');
console.log('');
console.log('quantidade de caracteres');
if ( listadepecas.length <= 10  ) {
    console.log('as pecas podem ser cadastradas');
}


for (let index = 0; index < listadepecas.length ; index++) {
    
    let pecaatual = listadepecas[index];
    console.log('');
    //  let pecaatual =  'peca B' -> para posição = 3
    if (pecaatual.length < 3) {
        console.log (pecaatual + ':a peça possui nome inferior a 3 caracteres e não pode ser cadastrada');
    } else {
        console.log(pecaatual + ': a peça pode ser cadastrada');
    }
}

console.log('peso da peça'); 
const pesodapecaemgramas  = 50;
if (pesodapecaemgramas >= 100){
    console.log ('peso suficiente');
}else{
    console.log('valor insuficiente');
}