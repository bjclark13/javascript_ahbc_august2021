import printStudentBio, { Student } from './students';

const students: Student[] = [
	// array of Student
	{
		name: 'BJ',
		bio: 'I am an instructor for Grand Circus',
	},
	{
		name: 'Gandalf',
		bio: 'I protect the shire',
		age: 24000,
	},
];

for (const student of students) {
	printStudentBio(student);
}
