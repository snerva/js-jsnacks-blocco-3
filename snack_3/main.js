//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.

const animals = [
    {nome: 'cat', family: 'felini', class: 'mammiferi'},
    {nome: 'cane', family: 'canide', class: 'mammiferi'},
    {nome: 'gallina', family: 'fasianide', class: 'volatili'}

]

const mammiferiList = animals.filter(animal =>{
    if (animals.class === mammiferi){
        return true
    }
})
    