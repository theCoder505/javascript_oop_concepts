# 🧠 JavaScript Object-Oriented Programming (OOP)

A complete guide to OOP in JavaScript — from creating objects to the four pillars of OOP.

---

## 📌 Table of Contents

1. [What is OOP?](#1-what-is-oop)
2. [Creating Objects](#2-creating-objects)
   - [Object Instance](#21-object-instance)
   - [Constructor Function](#22-constructor-function)
   - [Class (Blueprint)](#23-class-blueprint)
   - [Class Expression](#24-class-expression)
3. [Constructor Method](#3-constructor-method)
4. [Getters & Setters](#4-getters--setters)
5. [Static Keyword](#5-static-keyword)
6. [The Four Pillars of OOP](#6-the-four-pillars-of-oop)
7. [Inheritance](#7-inheritance)
8. [Polymorphism](#8-polymorphism)
9. [Encapsulation](#9-encapsulation)
10. [Abstraction](#10-abstraction)
11. [Quick Reference Cheatsheet](#11-quick-reference-cheatsheet)

---

## 1. What is OOP?

**Object-Oriented Programming (OOP)** is a programming style where code is organized around **objects** — bundles of data (properties) and behavior (methods).

```
OOP ==> INHERITANCE | POLYMORPHISM | ENCAPSULATION | ABSTRACTION
             ↓               ↓               ↓              ↓
         Reusability |   Flexibility  |   Security  |  Simplicity
```

| Pillar | Bengali | Purpose |
|--------|---------|---------|
| **Inheritance** | উত্তরাধিকার | বাবার গুণ ছেলে পাবে ♻️ — Write once, use many times |
| **Polymorphism** | বহুরূপিতা | এক মানুষ, অনেক রূপ 🎭 — Same method, different behaviors |
| **Encapsulation** | আবদ্ধকরণ | তালা দিয়ে রাখা 🔒 — Protect and hide data |
| **Abstraction** | বিমূর্তকরণ | শুধু দরকারি জিনিস দেখানো 🎯 — Hide complexity, show only what matters |

> 💡 **Objects and instances are the same thing** — just two synonyms for one concept.

---

## 2. Creating Objects

There are **four ways** to create objects in JavaScript.

### 2.1 Object Instance

The simplest way — create an empty object and assign properties to it directly.

```js
let person = Object();
person.first_name = 'Emad';
person.last_name  = 'Khan';
person.age        = 26;
person.city       = 'Dhaka';

person.getName = () => {
    return `Programmer Name is: ${person.first_name} ${person.last_name}`;
};

console.log(person.getName()); // Programmer Name is: Emad Khan
```

**When to use:** Quick, one-off objects. Not ideal for creating many similar objects.

---

### 2.2 Constructor Function

A regular function that acts as a factory for objects. Called with the `new` keyword.

```js
function Employee() {
    this.fname       = 'Sagor';
    this.lname       = 'Sarkar';
    this.age         = 27;
    this.city        = 'Dhaka';

    this.getName = () => {
        return `Employee Name is: ${this.fname} ${this.lname}`;
    };
}

let emp = new Employee();
console.log(emp.getName()); // Employee Name is: Sagor Sarkar
```

> 💡 `constructor()` method and constructor function both serve the same purpose — just written differently.

---

### 2.3 Class (Blueprint)

The modern, clean way to define object blueprints. A class is a **blueprint**, and `new` converts it into an actual object.

```
Class (blueprint) ──→ new keyword ──→ Object (instance)
```

```js
class DeveloperInfo {
    fname = 'Dipto';
    lname = 'Karmakar';
    age   = 26;
    city  = 'Tangail';

    getName = () => {
        return `Developer Name is: ${this.fname} ${this.lname}`;
    };
}

let developer1 = new DeveloperInfo();
let developer2 = new DeveloperInfo();
let developer3 = new DeveloperInfo();

console.log(developer1.getName()); // Developer Name is: Dipto Karmakar
```

**Why classes?** One blueprint → unlimited unique objects. Each instance is independent.

---

### 2.4 Class Expression

A class assigned to a variable. Can be reassigned (using `let`) or re-declared (using `var`).

```js
// Using let — allows reassignment, prevents re-declaration
let juniorDeveloper = class {
    salary1 = 10000;
    salary2 = 12500;

    countSalaries() {
        return `Income: ${this.salary1 + this.salary2}`;
    }
};

// Reassign — completely replaces the class
juniorDeveloper = class {
    salary1 = 19000;
    salary2 = 22500;

    countSalaries() {
        return `Income: ${this.salary1 + this.salary2}`;
    }
};

let dev = new juniorDeveloper();
console.log(dev.countSalaries()); // Income: 41500
```

> ⚠️ **`var`, re-assignment, and re-declaration are STRONGLY DISCOURAGED in strict OOP.** The main purpose of OOP is stability and structure — not rewriting blueprints on the fly.

---

## 3. Constructor Method

The `constructor()` is a **magic method** — it runs **automatically** the moment an object is created from the class. No manual call is needed.

```js
class constructExp {
    constructor() {
        console.log('I run automatically when object is created!');
    }
}

let obj = new constructExp(); // → "I run automatically when object is created!"
```

### Passing Parameters via Constructor

```js
class constructParameterPass {
    constructor(num1, num2) {
        console.log(num1 + num2);
    }
}

let output = new constructParameterPass(10, 25); // → 35
```

### Changing Class Properties via Constructor

```js
class Calculator {
    num1 = 10;
    num2 = 20;

    constructor(a, b) {
        this.num1 = a; // Override default values
        this.num2 = b;
    }

    add() {
        return this.num1 + this.num2;
    }
}

let calc = new Calculator(450, 550);
console.log(calc.add()); // → 1000
```

| Feature | Constructor | Static |
|---------|-------------|--------|
| **When it runs** | Right after `new` creates the object | Called directly on the class, no object needed |
| **Requires object?** | ✅ Yes | ❌ No |

---

## 4. Getters & Setters

Getters and setters provide **controlled access** to class properties. They look like properties when used, but behave like methods internally.

```js
class ProductData {
    set setPrice(priceVal) {
        this.price = priceVal;
    }

    get getPrice() {
        return this.price;
    }
}

let product = new ProductData();
product.setPrice = 100;          // Setter — called like a property assignment
console.log(product.getPrice);   // Getter — called like a property read
// → 100
```

> 💡 Notice: setters use `=` for assignment, and getters use no `()` — they look like normal properties.

---

## 5. Static Keyword

`static` lets you access properties or methods **directly on the class** — no object creation needed. Great for shared data, utility functions, and memory efficiency.

```js
class ProjectManager {
    static #fname = 'John';   // Private + Static
    static lname  = 'Smith';  // Public + Static

    static getFullName() {
        return `Project Manager: ${this.#fname} ${this.lname}`;
    }
}

// Access directly — no 'new' needed
console.log(ProjectManager.getFullName()); // Project Manager: John Smith

// Public static can be changed from outside (security risk!)
ProjectManager.lname = 'Hacked!';
console.log(ProjectManager.getFullName()); // Project Manager: John Hacked!

// Private static (#fname) cannot be accessed or changed from outside ✅
```

> ⚠️ Without `static`, accessing `fname` or `lname` without an object would return `undefined`.

---

## 6. The Four Pillars of OOP

---

## 7. Inheritance

**Inheritance** lets a child class receive all properties and methods of a parent class — just like in real life. `extends` is the keyword.

```js
class ParentClass {
    num1      = 10;
    num2      = 20;
    personAge = 65;

    addNum() {
        return this.num1 + this.num2;
    }
}

class ChildClass extends ParentClass {
    num3     = this.num1; // Inherited from Parent
    num4     = 45;
    childAge = 40;
}

class GrandChildClass extends ChildClass {
    num5         = this.num4; // Inherited from Child
    num6         = 65;
    grandSonAge  = 15;

    addAllAges() {
        return this.personAge + this.childAge + this.grandSonAge;
        //     ↑ from Parent    ↑ from Child    ↑ own property
    }
}

let third_clan = new GrandChildClass();
console.log(third_clan.addAllAges()); // 65 + 40 + 15 = 120
```

### Constructor in Inheritance — `super()`

When the child class has a `constructor`, it **must call `super()`** first to confirm the parent's construction.

```js
class Father {
    // No constructor here
}

class Son extends Father {
    constructor(msg) {
        super(); // 👊 Must call parent first
        console.log('Constructor from Son: ' + msg);
    }
}

new Son("Hello!"); // → Constructor from Son: Hello!
```

When **both** parent and child have constructors, **both execute**:

```js
class Dad {
    constructor(msg) {
        console.log('DAD constructor: ' + msg);
    }
}

class Daughter extends Dad {
    constructor(msg) {
        super();  // Runs Dad's constructor
        console.log('Daughter constructor: ' + msg);
    }
}

new Daughter("Hi!"); 
// → DAD constructor: undefined
// → Daughter constructor: Hi!
```

> 💡 Parameters don't automatically pass to the parent — only what you explicitly pass to `super()` reaches the parent constructor.

### Static in Inheritance

```js
class Mommy {
    static greetParent() { return 'Hello from Mom!'; }
}

class Baby extends Mommy {
    static greetBaby() { return 'I am hungry!'; }
}

console.log(Mommy.greetParent()); // Hello from Mom!
console.log(Baby.greetParent());  // Hello from Mom! ← Inherited static
console.log(Baby.greetBaby());    // I am hungry!
```

---

## 8. Polymorphism

**Polymorphism** means the same method name behaves differently depending on context. It lives inside inheritance.

### Method Overriding

A child class can **override** a parent's method with its own version.

```js
class Papa {
    calculation() {
        return 100 + 200; // → 300
    }
}

class PapasChild extends Papa {
    calculation() {       // Same name — different behavior
        return 500 - 300; // → 200
    }
}

let child = new PapasChild();
console.log(child.calculation()); // → 200 (child's version runs, not parent's)
```

### Method Overloading

Two or more methods with the **same name but different parameters**. JavaScript doesn't support this natively, but it can be simulated using `arguments`.

```js
class MyClass {
    method(p1, p2, p3) {
        if (arguments.length === 1) {
            console.log('One argument:', p1);
        } else if (arguments.length === 2) {
            console.log('Two arguments:', p1, p2);
        } else if (arguments.length === 3) {
            console.log('Three arguments:', p1, p2, p3);
        }
    }
}

let obj = new MyClass();
obj.method(1);       // One argument: 1
obj.method(1, 2);    // Two arguments: 1 2
obj.method(1, 2, 3); // Three arguments: 1 2 3
```

> ⚠️ Direct method overloading (like Java/Python/C++) does **not** exist in JavaScript. The simulation above is the JS way.

---

## 9. Encapsulation

**Encapsulation** means bundling data and methods together, and protecting internal data from direct outside access. Think of it as putting a lock on your data 🔒.

**Benefits:**
- Grouping data & actions together
- Hiding complexity
- Data protection
- Controlled access
- Better maintainability

### Three Ways to Achieve Encapsulation

#### a) Using Closures

```js
function createCounter() {
    let count = 0; // Private — can't be accessed from outside

    return {
        increment: () => count++,
        decrement: () => count--,
        getCount:  () => count
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // → 2
// console.log(counter.count);   // → undefined (protected!)
```

#### b) Using Constructor Functions

```js
function ScoreCounter() {
    let score = 0; // Private

    this.increment = () => score++;
    this.decrement = () => score--;
    this.getScore  = () => score;
}

let scoreObj = new ScoreCounter();
scoreObj.increment();
scoreObj.increment();
scoreObj.decrement();
console.log(scoreObj.getScore()); // → 1
```

#### c) Using ES6 Classes with Private Fields (`#`)

The cleanest, most modern approach. Private fields use `#` prefix and are **completely inaccessible** from outside the class.

```js
class MarkCounter {
    #marks; // Private field — the # makes it private

    constructor() {
        this.#marks = 0;
    }

    increment() { this.#marks++; }
    decrement() { this.#marks--; }

    getMark() {
        console.log(this.#marks);
    }
}

const marksCounter = new MarkCounter();
marksCounter.increment();
marksCounter.increment();
marksCounter.increment();
marksCounter.decrement();
marksCounter.getMark(); // → 2

// marksCounter.#marks;  // ❌ SyntaxError — truly private!
```

---

## 10. Abstraction

**Abstraction** means hiding complex internal logic and only showing what's necessary to the outside world.

> ⚠️ **Important Note:** JavaScript does **not have native Abstraction support** like abstract classes in Java or C++. Encapsulation (using `#` private fields) is often used to achieve a similar effect.

The idea is simple: the user of a class shouldn't need to know *how* it works — just *what* it does.

```js
class SmartTV {
    #internalCircuit() {
        // Complex internal logic hidden here
    }

    turnOn() {
        // Simple public method — user just calls this
        this.#internalCircuit();
        console.log('TV is ON');
    }
}

let tv = new SmartTV();
tv.turnOn(); // User only sees this simple method
// tv.#internalCircuit(); // ❌ Hidden from outside
```

---

## 11. Quick Reference Cheatsheet

```js
// ─────────────── Object Creation ───────────────
let obj = Object();                // Object instance
function MyFn() { this.x = 1; }   // Constructor function
class MyClass { x = 1; }          // Class (blueprint)
let MyExpr = class { x = 1; };    // Class expression

// ─────────────── Constructor ───────────────────
class Example {
    constructor(val) {
        this.val = val;            // Runs auto on 'new'
    }
}

// ─────────────── Getter / Setter ───────────────
class GS {
    set price(v) { this._p = v; }
    get price()  { return this._p; }
}

// ─────────────── Static ────────────────────────
class Util {
    static helper() { return 'No object needed!'; }
}
Util.helper(); // Direct call

// ─────────────── Inheritance ───────────────────
class Child extends Parent {
    constructor() {
        super(); // Required before 'this'
    }
}

// ─────────────── Encapsulation (Private) ───────
class Safe {
    #secret = 'hidden';
    reveal() { return this.#secret; }
}

// ─────────────── Override (Polymorphism) ───────
class Animal  { speak() { return 'Generic sound'; } }
class Dog extends Animal {
    speak() { return 'Woof!'; }    // Overrides parent
}
```

---

## Summary Table

| Concept | Keyword | Purpose |
|---------|---------|---------|
| Create object | `new` | Instantiate a class/constructor |
| Inherit | `extends` | Child gets parent's properties |
| Call parent constructor | `super()` | Required in child constructors |
| Hide method/property | `#` (private field) | Encapsulation & Security |
| Class-level access | `static` | No object needed |
| Override | Same method name in child | Polymorphism |
| Read-only access | `get` | Getter |
| Write-only access | `set` | Setter |

---

> Made with ❤️ for JavaScript learners. OOP is not just a pattern — it's a way of thinking by EKSofts!