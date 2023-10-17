console.log('ciao')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}



// - creo una funzione per generare dei numeri random
function getArrayOfRandomIntBetween(min,max,number) {

    const randomNumArray = [];

    // popolare l'array con i numeri indicati in 'number'
    while(randomNumArray.length < number) {
       //generare numeri random che vanno da un minimo (min) ad un massimo (max)
       const n = getRandomIntInclusive(min,max);
       //Se n non è presente nell'array
       console.log(n);
       if(!randomNumArray.includes(n)) {
           //pushare in numero nell'array
            randomNumArray.push(n);
       } 

    }
    
    return randomNumArray
}

alert ('Stampasti questi numeri nella mente ' + getArrayOfRandomIntBetween(1,100,5))

let score = 0

const listaNumeri = []

const idPrimoTimeout = setTimeout(function(){
	console.log('sono passati 3 secondi')
    for (let i = 0; i < 5; i++) {
        let numbersUser = parseInt(prompt('Scrivi i numeri che ricordi'))            
        console.log(numbersUser)   
    
        if (!listaNumeri.includes(numbersUser)){
            listaNumeri.push(numbersUser) 
            
            if (listaNumeri.includes(numbersUser)) {
                score++
            }
        }
       
    }       
    console.log(listaNumeri)
}, 3000)
// console.log('Il timeout è = ',idPrimoTimeout)

// function storedNumbers() {
//     for (let i = 0; i < 5; i++) {
//         let numbersUser = parseInt(prompt('Scrivi i numeri che ricordi'))            
//         console.log(numbersUser)   
    
//         if (!listaNumeri.includes(numbersUser)){
//             listaNumeri.push(numbersUser) 
            
//             if (listaNumeri.includes(numbersUser)) {
//                 score++
//             }
//         }
       
//     }    
    
// }
