var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Player(name, position, offense, defense, goodGame, badGame) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.goodGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++
            console.log(this.name + "'s offense has gone up!\n")
        }
        else {
            this.defense++
            console.log(this.name + "'s defense has gone up!\n")
        }
    }

    this.badGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s offense has gone down!\n")
        }
        else {
            this.defense--;
            console.log(this.name + "'s defense has gone down!\n")
        }
    }
}

// creates the printInfo method and applies it to all programmer objects
Player.prototype.printStats = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.defense);
};

function addNewPlayer() {

    inquirer.prompt([
        {
            name: "name",
            message: "What is your name?"
        }, {
            name: "position",
            message: "Position played?"
        }, {
            name: "offense",
            message: "How good is their offense?"
        }, {
            name: "defense",
            message: "How good is their defense?"
        }, {
            type: 'confirm',                                                                    
            name: 'askAgain',
            message: 'Do you want to add another player (just hit enter for YES)?',
            default: true
        }
    ]).then(function (answers) {
        // initializes the variable newProgrammer to be a programmer object which will take
        // in all of the user's answers to the questions above
        var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense, answers.goodGame, answers.goodGame);
        // printInfo method is run to show that the newProgrammer object was successfully created and filled
        newPlayer.printStats();

        if (answers.askAgain) {
            addNewPlayer();
        }
        else{
            playGame();
        }
    });
}

function playGame() {

    for (var i = 0; i < 5; i++) {


    }

}

addNewPlayer();