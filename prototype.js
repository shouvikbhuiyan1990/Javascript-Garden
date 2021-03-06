function Animal(){}
var a = new Animal();


Animal.eye = 2;     //not accessible to a
Animal.sound = function(){
    console.log('Sound of an animal');
}           //not accessible to a

Animal.prototype.nose = 1;      //accessible to a
Animal.prototype.run = function(){
    console.log('Animal runs');
}           //accessible to a

function Dog(){}

// Dog inheriting all the properties and methods within Animal prototype
Dog.prototype = new Animal();   

var d = new Dog();
d.run();        // works
d.nose;        // works

d.eye;        // doesn't work
d.sound();        // doesn't work


// check instance
d instanceOf Dog();  //true
d instanceOf Animal();  //true

a instanceOf Dog();  //false
a instanceOf Animal();  //true
