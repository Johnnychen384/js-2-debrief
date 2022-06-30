// Create Array to hold exercises
// create function to take a single number
// create inside function, a mini function that generates a random number for the index
// create a console.log() to return exercises.

const exercises = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'
]

function randomGen(num) {

    // generates random index number
    const randomIndex = () => {
        return (Math.floor(Math.random() * exercises.length) + 1)
    }

    for(let i = 1; i <= num; i++){
        console.log(exercises[randomIndex()])
    }
    
}

// randomGen(2);



// ----------GEnBUzz

function genBuzz(num) {
    if(typeof num === 'number'){
        for(let i = 1; i <= num; i++){
            if(i % 15 === 0){
                console.log('GenBuzz')
            }else if (i % 3 === 0){
                console.log('BUzz')
            }else if (i % 5 === 0){
                console.log('Gen')
            }else{
                console.log(i)
            }
        }
    }
    
}

// genBuzz(15);

function eCommerce(item){
    const theItem = item.toLowerCase();
    switch(theItem){

        case 'shoes':
            console.log('$50')
            break;
        case 'jeans':
            console.log('$25')
            break;
        case 'hat':
            console.log('$12')
            break;
        case 'socks':
            console.log('$2')
            break;
        default:
            console.log('Invalid Item')
            break;
    }
}

// eCommerce("shoes")