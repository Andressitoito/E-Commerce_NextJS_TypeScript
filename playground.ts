// TS Recommend to use Interface over Types when possible
// Describe data structures in a more natural way
// Describing objects

// Shipment, Orders...
// interface Person {
//  name: string;
//  age: number;
// }

// interface PersonLoggerFn {
// 	(name: string, age: number): string;
// }

// type aliases
// to describe functions types
// type Person = {
// 	name: string;
// 	age: number;
// };

/* export default function type_interfaces_play() {
 console.log("Hello World");

 const name: string = "Andy";
 const age = 52;

 const jhon: Person = {
  name: "Anyr",
  age: 45,
 };

 function logPersonInfor(personName: string, personAge: number): string {
  const info = `Name: ${personName}, age: ${personAge}`;
  console.log(info);
  return info;
 }

 const logPersonInfo: PersonLoggerFn = (
  personName: string,
  personAge: number = 0
 ): string => {
  const info = `Name: ${personName}, age: ${personAge}`;
  console.log(info);
  return info;
 };

 function logPersonInfo2(person: Person) {
  const info = `Name: ${person.name}, age: ${person.age}`;

  console.log(info);

  return info;
 }
 const log = logPersonInfo(name);

 const person = new Person('Andy', 5)

 logPersonInfo2(person);
} */

// class Person {
//  name: string;
//  age?: number;

//  constructor(name: string, age: number) {
//   this.name = name;
//   this.age = age;
//  }
// }

// type PersonLoggerFn = (name: string, age?: number) => string;




// export default function play() {
// 	// const names: string[] = ['Filip', 'Jhon']
// 	// const numbers: Array<number> = [1, 2, 3, 4, 5]

// 	const random = Math.random() > 0.5 ? "Hello" : [1, 2];

//  // Narrowing
// 	if (typeof random === "string") {
// 		const upper = random.toUpperCase();
// 	} else {
//   console.log(random);
//  }

//  console.log(random.length);

// }

interface Person {
 name: string
}

export default function Play(){

}