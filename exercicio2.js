
import { getLista } from "./lista2.js";

const lista = getLista()
let prod = []

function getValor(){
   
    lista.forEach(data =>{
        if(data.dataVenda == '02-05-2021'){
           const { itensVenda } = data
           prod.push(itensVenda) 
        }
    })
    prod = prod.flat()
    return prod.reduce((add,atual) => add + (atual.valor*atual.quantidade),0)
     
}

console.log(getValor())
