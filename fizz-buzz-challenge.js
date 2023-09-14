//Fizz Buzz challenge

//Multiplo de 3... fizz

//Multiplo de 5... buzz

//Multiplo de 3 y 5... fizz buzz

for (let index = 0; index < 100; index++) {
    if (index % 3 === 0 && index % 5 === 0){
        console.log(`${index}... FIZZ BUZZ`)
    } else if(index % 3 === 0){
        console.log(`${index}...FIZZ`)
    } else if (index % 5 === 0){
        console.log(`${index}...BUZZ`)
    }
}