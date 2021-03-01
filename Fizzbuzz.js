var num = []

// var count = 1

function fizzbuzz () {
    
    for (num = 1; num <100; num++){

        if (num % 3 === 0 && num % 5 === 0){

            console.log('fizzbuzz')
        }
        if (num % 3 === 0){

            console.log('fizz')
            }

        else if (num % 5 === 0){

            console.log('buzz')
        }else {

            console.log(num)
        }
}


}


fizzbuzz()