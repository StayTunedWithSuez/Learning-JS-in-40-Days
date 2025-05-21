//The new binding

//Let's create a constructor function
const Cartoon = function (name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function() {

        //Binding occurs
        console.log(this.name + " is a " + this.animal);
    }
};

const tomCartoon = new Cartoon("Tom", "cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();




