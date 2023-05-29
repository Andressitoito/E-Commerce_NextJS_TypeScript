
// TS Recommend to use Interface over Types when possible
// 

interface Person {
 name: string,
 age: number
}


// type Person = {
// 	name: string;
// 	age: number;
// };

export default function play() {
 console.log("Hello World");

 const name = "Andy";
 const age = 52;

 const person: Person = {
  name: "Anyr",
  age: 45,
 };

 function logPersonInfo(personName: string, personAge: number) {
  const info = `Name: ${personName}, age: ${personAge}`;

  console.log(info);

  return info;
 }

 function logPersonInfo2(person: Person) {
  const info = `Name: ${person.name}, age: ${person.age}`;

  console.log(info);

  return info;
 }

 logPersonInfo(name, age);
 logPersonInfo2(person);
}
