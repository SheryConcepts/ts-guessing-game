import inquirer from 'inquirer';

// generate a random number between 1 and 20
const guess = Math.floor(Math.random() * 20) + 1;


inquirer.prompt(
    {
        type: "input",
        name: "guess",
        message: "enter your guess",
        validate: (v) => {
            v = Number(v);
            if (v > guess){
               return 'a little lower'; 
            } else if (v < guess) {
                return 'a little higher';
            } else if (v === guess) {
                return true;
            } else {
                return 'please enter a number'
            }
        }
    }
).then((a) => {
    console.log(`you have guessed the correct number: ${a.guess}, congratulation`);
})
