// Creating Objects using Object-Instance
let person = Object();
person.first_name = 'Emad';
person.last_name = 'Khan';
person.age = 26;
person.city = 'Dhaka';
person.isLaravelist = true;

person.getName = () => {
    return `Programmer Name is: ${person.first_name} ${person.last_name}`;
}
// console.log(person.getName());








// Creating Object By Object-constructor
//------------------- Object by using constructor() --------------------
// When create a function and by the function we call the object -> that is object by condtructor!
function employee() {
    this.fname = 'William';
    this.lname = 'Franklin';
    this.age = 27;
    this.city = 'Dhaka';
    this.isLaravelist = true;

    this.getName = () => {
        return `Employee Name is: ${this.fname} ${this.lname}`;
    }
}
let employeeObjectIInstance = new employee();
// console.log(employeeObjectIInstance.getName());









// Blueprint/Class || You are basically writing an OBject
// Cause the blueprint of an object is also an object!
class DeveloperInfo {
    fname = 'Dipto'
    lname = "Karmakar"
    age = 26
    city = 'Tangail'
    isLaravelist = false
    getName = () => {
        return `Developer Name is: ${this.fname} ${this.lname}`;
    }
}

// To use as object we need to convert from blueprint (class) to object
let developer1 = new DeveloperInfo();
let developer2 = new DeveloperInfo();
let developer3 = new DeveloperInfo();

// console.log(developer1.getName());









// Class creation using Class Expression
let juniorDeveloper = class {
    salary1 = 10000
    salary2 = 12500
    countSalaries() {
        return `Income: ${this.salary1 + this.salary2}`
    }
}


// This way we can reassign
juniorDeveloper = class {
    salary1 = 19000
    salary2 = 22500
    countSalaries() {
        return `Income: ${this.salary1 + this.salary2}`
    }
}
let jDevTootIncome = new juniorDeveloper();
// console.log(jDevTootIncome.countSalaries());













// Re-Declaration in OOP
// First declaration
var seniorDevSalary = class {
    salary1 = 60000
    salary2 = 70000
    countSalaries() {
        return `Income: ${this.salary1 + this.salary2}`
    }
}

let dev1 = new seniorDevSalary();
// console.log(dev1.countSalaries());

// ✅ Re-declaration — completely overwrites the first one
var seniorDevSalary = class {
    salary1 = 750000
    salary2 = 850000
    countSalaries() {
        return `Income: ${this.salary1 + this.salary2}`
    }
}

let dev2 = new seniorDevSalary();
// console.log(dev2.countSalaries());


// var, re-asssignment & re-declaration are 
// STRONGLY DISCOURAGED IN STRICT OOP | As OOP main purpoe is not that!






















//---------------- Constructor in OOP-------------------
class constructExp {
    constructor() {
        // console.log('I am a Constructor Method');
    }
}
let showConstruct = new constructExp();
// constructor runs immidiately after creating the instance/object



//passing parameters in constructor
class constructParameterPass {
    constructor(num1, num2) {
        let sum = num1 + num2
        // console.log(sum);
    }
}
let output = new constructParameterPass(10, 25);



// changing class properties using constructor parameters
class changeByConstructor {
    num1 = 10;
    num2 = 20;

    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }

    addToNum() {
        return (this.num1 + this.num2);
    }
}

let changedObj = new changeByConstructor(450, 550);
// console.log(changedObj.addToNum());





















// Getter & Setters in OOP
class ProductData {
    set setPrice(priceVal) {
        this.price = priceVal;
    }

    get getPrice() {
        return this.price;
    }
}

let product = new ProductData();
product.setPrice = 100; // we need to set price this way in getter & setter!
// console.log(product.getPrice);






// Static Keyword | without creating an object we can access properties directly from the class.
// Used for Shared Properties, Utility Functions, Memory Efficiency
class ProjectManager {
    static #fname = 'John'
    static lname = 'Smith'
    static getFullName() {
        return `Project Manager: ${this.#fname} ${this.lname}`;
    }
}


ProjectManager.fname = 'Hacked!'
ProjectManager.lname = 'Hacked!'
// here we can see lname not private thus can be changed. So security breaks!
// console.log(ProjectManager.getFullName()); // Project Manager: John Hacked!
// Look here we are calling/accessing property directly without creating object from the class! It would return undefined without the static keyword!!
// fname & lname also needs to be static else won't show without object!
// o abstraction and Encapsulation here we can see. (Though encapsulation needs private value like #fname, #lname)


























//------------------- INHERITANCE In OOP --------------------
class ParentClass {
    num1 = 10;
    num2 = 20;
    personAge = 65;
    addNum() {
        let sum = this.num1 + this.num2;
        return sum;
    }
}

class ChildClass extends ParentClass {
    num3 = this.num1;
    num4 = 45;
    childAge = 40;
}


class GrandChildClass extends ChildClass {
    num5 = this.num4;
    num6 = 65;
    grandSonAge = 15;
    addAllAges() {
        let sum = this.personAge + this.childAge + this.grandSonAge
        return sum;
    }
}


let first_clan = new ParentClass();
let second_clan = new ChildClass();
let third_clan = new GrandChildClass();
// console.log(third_clan.addAllAges());
// Here I've shown we can use one class to it's child one after another and clan after clan! So generation after generation can use the properties











// Constructor In Inheritance
class Father {
    // constructor(msg){
    //     console.log('Constructor: ' + msg);
    // }
}

class Son extends Father {
    // under the child we can't access constructor directly. needs parents confirmation. We use super() thus. (SuperPower 👊💪💪)
    constructor(msg) {
        super()
        console.log('Constructor from Son Class ' + msg);
    }

    // parent can't use childs property. Child can use, so Son constructor (property) can't be used by Parent/Dad/Father! 😢😢
    // Just like the same way like real world!
}

// passing parameters
// new Father("This is from Father");
// new Son("This is from Son");
// new Son("EXtended here!");





// if both Dad and Daughter has constructor, then both will executes!
// Daughter will show both constructor as per inherited!
class Dad {
    constructor(msg) {
        console.log('This is DAD constructor ' + msg);
    }
}

class Daughter extends Dad {
    constructor(msg) {
        super()
        console.log('This is Daughter constructor ' + msg);
    }
}


// new Daughter("Extended Message!");
// see here daughter parameter not ssending to Dad. Logically it won't, as no back propagation can be there!







// Static property in Inheritance
class Mommy {
    static greetParent() {
        return 'Hello from Mom!';
    }
}

class Baby extends Mommy {
    static greetBaby() {
        return 'I am hungry!';
    }
}

// here we are directly showing value using static
// console.log(Mommy.greetParent());
// console.log(Baby.greetParent());
// console.log(Baby.greetBaby());





// Over-riding in Inheritance
class Papa {
    calculation() {
        let num1 = 100;
        let num2 = 200;
        return num1 + num2;
    }
}

class PapasChild extends Papa {
    calculation() {
        let num1 = 300;
        let num2 = 500;
        return num2 - num1;
    }
}

let papasChildObj = new PapasChild();
// console.log(papasChildObj.calculation());










//------------------------ Method Overloading ---------------------------
/*  Two or more same name methods with different parameters
    In other programming languages, like: Java, Pythin, C++
    class myClass{
        method(p1, p2){

        }

        method(p1,p2,p3,p4,p5){

        }
    }

    In JS OOP method-overloading support is not directly found!
    But yet we can do this by processing.
*/

class myClass {
    method(p1, p2, p3) {
        if (arguments.length === 1) {
            console.log('Received Argument: ', p1);
        } else if (arguments.length === 2) {
            console.log('Received Argument: ', p1, p2);
        } else if (arguments.length === 3) {
            console.log('Received Argument: ', p1, p2, p3);
        }
    }
}

let myObj = new myClass();
// myObj.method(1);
// myObj.method(1, 1);
// myObj.method(1, 1, 1);



// NB: Polymorphim lies in the inheritance, over-riding & over-loading
// nb: In JS OOP ABSTRACTION does not exist!




























// --------------------- ENCAPSULATION ---------------------
/*
Facilities: 
    a. Grouping data & actions, 
    b. Complexity hide,
    c. Data Protection,
    d. Controlled Access,
    e. Maintainability.

3 ways of Encapssulation:
    a) Uing Closures
    b) Using Constructor Functions
    c) uing ES6 classes
*/

// a) Encapsulation Using Closures:
function createCounter() {
    let count = 0;

    return {
        increment: () => {
            count++
        },
        decrement: () => {
            count--
        },
        getCount: () => {
            return count
        }
    }
}

const counter = createCounter();
counter.increment(); // Runs immidiately after asigning the object, not waiting for the calls. So this is what constructor does.
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
// console.log(counter.getCount());







// b) Encapsulation Using constructor functions:
function scoreCounter() {
    let score = 0;

    this.increment = () => {
        score++
    }
    this.decrement = () => {
        score--
    }
    this.getScore = () => {
        return score;
    }
}

let score_obj = new scoreCounter();
score_obj.increment();
score_obj.increment();
score_obj.increment();
score_obj.increment();
score_obj.increment();
score_obj.decrement();
score_obj.decrement();
// console.log(score_obj.getScore());







// c) Encapsulation Using ES6 Class:
class markCounter {
    // #marks = 0;
    #marks;
    constructor() {
        this.#marks = 0
    }
    increment() {
        this.#marks++
    }
    decrement() {
        this.#marks--
    }
    getMark() {
        console.log(this.#marks);
    }
}

const marksCounter = new markCounter();
marksCounter.increment();
marksCounter.increment();
marksCounter.increment();
marksCounter.increment();
marksCounter.increment();
marksCounter.increment();
marksCounter.decrement();
marksCounter.decrement();
// marksCounter.getMark();









