// STUDENT OBJECT
// getting better each time
// remember these are just useful for humans
// computers don't notice a difference
// stand alone object
// const student = {
// 	name: 'BJ',
// 	status: 'front-end',
// };

let students = [
	{
		name: 'BJ',
		status: 'front-end',
	},
	{
		name: 'Nick',
		status: 'back-end',
	},
];

interface RedditPost {
	kind: string;
	data: {
		thumbnail: string;
	};
}

class Post {
    save() {
        // stores the database
    }
}

interface RedditResponse {
	kind: string;
	data: { children: RedditPost[] };
}

function getThumbnails(response: RedditResponse) {
	for (let child of response.data.children) {
		console.log(child.data.thumbnail);
	}
}

// interface
interface Student {
	name: string;
	status: string;
	printReportCard(): number;
}

students = [
	{
		name: 'BJ',
		status: 'front-end',
	},
	{
		name: 'Nick',
		status: 'back-end',
	},
];

// function that returns an object
function createStudent(name, status): Student {
	return {
		name,
		status,
	};
}

// class
class StudentC {
	constructor(public name: string, public status) {}

	printReportCard() {
		console.log(grades);
	}
}

// subclass
// add more functionality
// while keep what's unique to student
class FrontEndStudent extends StudentC {
	learnJavaScript() {}
}

const student = new StudentC('BJ', 'front-end'); // object
const frontEndStudent = new FrontEndStudent('Nick', 'front-end'); // object

function enrollInClass(student: StudentC, bootcamp: StudentC[]) {
	bootcamp.push(student);

	return bootcamp;
}
enrollInClass(frontEndStudent, []);
// polymorphism: if you can use the parent, you can also use the child

abstract class Shape {
	public label;

	// has to be extended in order to be used
	abstract getArea(): number; // you have a getArea, we just don't know what that looks like yet

	// implement
	getLabel(): string {
		return this.label;
	}
}

class Circle extends Shape {
	// you have to create your own getArea function
	getArea() {
		return 5;
	}
}

const circle = new Circle();
circle.getLabel(); // this.label

class Square extends Shape {
	getArea() {
		return 6;
	}
}
