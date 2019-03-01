function character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStatus = function () {
        console.log("Name: " + this.name + "\nProfession: "+this.profession+
        "\nGender: " + this.gender + "\nAge: "+this.age+
        "\nStrength: " + this.strength + "\nHitpoints: "+this.hp);
    };
    this.alive = function(){

        if(this.hp > 0){
            console.log(`${this.name} is alive!`)
        }
        else{
            console.log(`${this.name} is dead!`)
        }
    }
    this.attack = function(){
        this.hp = this.hp - this.strength;

        console.log(`${this.hp} current strength`)
    }
    this.levelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hp += 25;

        console.log(`${this.age} current age`)
        console.log(`${this.strength} current strength`)
        console.log(`${this.hp} current hp`)
    }
}




var char1 = new character("Bob", "Dr.", "Male", 46, 75, 200);
var char2 = new character("LeRon", "Billionaire", "Male", 41, 100, 1000);
char1.printStatus();
char2.printStatus();

char1.alive();
char2.alive();

char1.attack();
char2.attack();

char1.levelUp();
char2.levelUp();

