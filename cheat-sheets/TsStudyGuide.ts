// ● Define typed variables in TS
const instructorName: string = 'BJ';

// function getAuthorName(author: Author) {} 
// types can be primitive types: string, number, boolean
//// types can also be interfaces, Instructor
// types can also be a class, Date

// ● Define and use interfaces with fields in TS
// description of how an object should be structured
interface Instructor {
    name: string,
    startDate: Date
}

const bj: Instructor = { // using an interface as a type
    name: instructorName,
    startDate: new Date('01/02/19')
}

// ● Define and use classes with fields, constructors, and methods
class GrandCircusInstructor { // does nothing, blueprint
    // fields, properties mean the same thiing
    // variables that are attached to your classs
    name: string;
    startDate: Date|string|null|number; // | can be either one

    constructor(name: string, date: Date) { // set up the data, function
        this.name = name;
        this.startDate = date;
    }

    teach(message: string): void|string { // method is function attached to a class, return types
        console.log(`${message}, blah blah blah`);
        //no return statement
    }

}

const gcInstructor = new GrandCircusInstructor('BJ', new Date()); // instance, implemetation of a class
gcInstructor.teach('FRONT END');

// ● Define subclasses, adding fields, adding and overriding methods
class FrontEndInstructor extends GrandCircusInstructor { // extends keyword to give parent-child relationship
    isReact: boolean = true; // add fields 

    constructor(name: string, date: Date) {
        super(name, date); // call the parent. super() is required for having constructors in subclasses
    }

    nap(): void { // add method
        console.log('zzzz');
    }

    teach(message: string|number|null|undefined): void|string { // overriding a method
        console.log(`${message} + JAVASCRIPT RULES`)
    }

    // null is intentionally nothing
    // undefined just means it has been given any value yet

}
// ● Define and extend abstract classes with abstract methods
abstract class Contractor { // not functional by itself, it's only used to create a subclass
    name: string;

    abstract submitPayStubs(): void; // method doesn't have a function body, just defining what it should do
}

class NightlySecurity extends Contractor {
    submitPayStubs(): void { // because it was abstract, we need to implement in our class
        console.log('submitted');
    }
}

class DaySecurity extends Contractor {
    submitPayStubs(): void { // because it was abstract, we need to implement in our class
        console.log('submitted day');
    }
}

// ● Use classes and subclasses polymorphically with variables, arrays, and method
// parameters

// polymorphically -- a function can take in multiple types
// if it accepts the parent, by default it accepts the child
function callContractor(contractor: Contractor) { // anything that inherits Contractor can be used
    console.log(`${contractor.name} called...`);
}

callContractor(new NightlySecurity()); // by being the child of Contractor, it is also a contractor
callContractor(new DaySecurity()); // 

function payContractors(contractors: Contractor[]) { // by using abstract class as the type 
                                                     // use any subclass in the array 

}

const c1 = new DaySecurity();
const contractors = [ 
    new NightlySecurity(), // hoem
    new DaySecurity(), // blogpost
    new NightlySecurity(),
    c1
];

payContractors(contractors); // polymorphism!

// const blogPost = new BlogPost(name, path, author); // creating a blog post