//////////////////////////////////
// TYPES VS INTERFACE
/////////////////////////////////

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

//////////////////////////////////
// NARROWING
//////////////////////////////////
/* 
export function play_a() {
	// const names: string[] = ['Filip', 'Jhon']
	// const numbers: Array<number> = [1, 2, 3, 4, 5]

	const random = Math.random() > 0.5 ? "Hello" : [1, 2];

	// Narrowing
	if (typeof random === "string") {
		const upper = random.toUpperCase();
	} else {
		console.log(random);
	}

	console.log(random.length);
}
	*/
//////////////////////////////////
// EXTENDING INTERFACE
//////////////////////////////////
/* 
interface Person {
	name: string;
	age: number;
}

interface BusinessPerson extends Person {
	salary: number;
}

interface AcademicPerson extends Person {
	publications: string[];
}

export default function Play() {
	const person: Person = {
		name: "Andresito",
		age: 42,
	};

	const person1: AcademicPerson = {
		name: "Andresito",
		age: 42,
		publications: ["1", "2"],
	};

	const person2: BusinessPerson = {
		name: "Andresito",
		age: 42,
		salary: 1000,
	};

	function logPerson(person: Person) { }

	logPerson(person2)
}
	*/
//////////////////////////////////
// EXTENDING TYPE
//////////////////////////////////

/* type Car = {
	name: string;
};

type RaceCar = {
	speed: number;
} & Car & {
		mileage: number;
	};

export default function play() {
	const car: RaceCar = {
		name: "Andy Car",
		speed: 34,
		mileage: 200,
	};

	function logCar(car: Car) {}

	logCar(car);
}
	*/
//////////////////////////////////
// UNIONS
//////////////////////////////////
type RaceCar = {
	name: string;
	maxSpeed: 200;
	team: string;
};

type CityCar = {
	name: string;
	space: string;
	maxSpeed: 100;
};

type SUVCar = {
	maxSpeed: 150;
	name: string;
	isCarbonFree: boolean;
};

type Car = RaceCar | CityCar | SUVCar;

// export default function Play() {
// 	const car: RaceCar = {
// 		name: "RacerCar",
// 		maxSpeed: 200,
// 		team: "Ferrari",
// 	};

// 	function logCarInfo(car: Car) {
// 		// Type Casting
// 		console.log((car as CityCar).space);
// 		console.log((<RaceCar>car).maxSpeed);

// 		switch (car.maxSpeed) {
// 			case 200:
// 				console.log(car.team);
// 				break;

// 			case 100:
// 				console.log(car);
// 				break;

// 			default:
// 				console.log(car);

// 		}
// 	}
// }

//////////////////////////////////
// INTERFACE NARROWING
//////////////////////////////////

interface Person {
	prop1: string;
	prop2: number;
}

interface Person {
	name: string;
	age: number;
	kind: "bussiness" | "academic";
}

interface BusinessPerson extends Person {
	kind: "bussiness";
	salary: number;
}

interface AcademicPerson extends Person {
	kind: "academic";
	publications: string[];
}

type Human =
	| BusinessPerson
	| AcademicPerson
	| { kind: "otherType"; special: string };

export default function Play() {
	const person: Person = {
		prop1: "",
		prop2: 123,
		kind: "academic",
		name: "Andy",
		age: 34,
	};

	function LogPersonInfo(human: Human) {
		if (human.kind === "academic") {
			console.log(human);
		} else if (human.kind === "bussiness") {
			console.log(human);
		} else {
			console.log(human);
		}
	}

	function logCarInfo(car: Car) {
		// Type Casting
		console.log((car as CityCar).space);
		console.log((<RaceCar>car).maxSpeed);

		switch (car.maxSpeed) {
			case 200:
				console.log(car.team);
				break;

			case 100:
				console.log(car);
				break;

			case 150:
				console.log(car.isCarbonFree);
				break;

			default:
				const _never: never = car;
				return _never;
		}
	}

	function printInfo(someObject: { [key: string]: unknown }) {
		if (typeof someObject.age === "string") {
			someObject.age.toUpperCase();
		}
	}

	printInfo({});
}
