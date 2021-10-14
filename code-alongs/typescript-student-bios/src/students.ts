// 1
export interface Student {
	name: string;
	age?: number;
	bio: string;
}

// 2

export default function printStudentBio(student: Student): void {
	console.log(
		`Hello, my name is ${student.name}.
         I am ${student.age ?? 'REDACTED'} years old. 
         ${student.bio}`
	); // null coalesce
}
