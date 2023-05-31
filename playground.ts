// TS Recommend to use Interface over Types when possible
// Describe data structures in a more natural way
// Describing objects

import { NextFontManifestPlugin } from "next/dist/build/webpack/plugins/next-font-manifest-plugin";

// Shipment, Orders...
// interface Person {
//  name: string;
//  age: number;
// }

class Person {
 name: string;
 age?: number;

 constructor(name: string, age: number) {
  this.name = name
  this.age = age
 }
}



// interface PersonLoggerFn {
// 	(name: string, age: number): string;
// }

type PersonLoggerFn = (name: string, age?: number) => string;

// type aliases
// to describe functions types
// type Person = {
// 	name: string;
// 	age: number;
// };

export default function play() {
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
}
