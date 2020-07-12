const name = "Szymon";
const age = 25;

console.log(name);
console.log(`cześć`);

console.log(`Nazywam się ${name} i mam ${age} lat.`);

const heading = document.querySelector(".dark-mode__heading--js");

heading.innerHTML = "hello there I'm JS what's your name? ";

const paragraph = document.querySelector(".dark-mode__paragraph-js");

paragraph.innerHTML = `Nazywam się ${name} i mam ${age} lat.`;

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);

  element.innerHTML = content;
}

createContent(".dark-mode__heading--js", "Zmieniony za pomocą funkcji JS");

function greet(age, name) {
  console.log(`Nazywam się ${name} i mam ${age} lat.`);
}
greet(age, name);

const newGreet = (age, name) => {
  console.log(`Nazywam się ${name} i mam ${age} lat.`);
};
newGreet(18, "Maciek");

function calculate(myNumber) {
  return myNumber * 7;
}

const myresult = calculate(3);
console.log(myresult);

const calculateNew = (Number) => Number * 7;

const resultNew = calculateNew(5);
console.log(resultNew);

console.log(calculateNew(6));

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 87,
  },
};

console.log(deathStar.name);
console.log(deathStar.commander.name);

deathStar.fire("Rebel ship");

console.log(deathStar["name"]);

const myProperty = "name";

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};
showMeProperty("levels");

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};
humanOne.address.street = "Lipowa";

const humanTwo = {
  name: "Stefan",
  age: 30,
  address: {
    street: humanOne.address.street,
    city: "Białystok",
  },
};

console.log(humanOne);
console.log(humanTwo);

console.log(humanOne);
console.log(humanTwo);

const hello = (age, name) => {
  console.log(`Nazywam się ${name} i mam ${age} lat.`);
};

hello(120, "Karol");

function hellofun(age, name) {
  console.log(`Nazywam się ${name} i mam ${age} lat.`);
}

hellofun(123, "Karol");

const humanThree = {
  name: "Karol",
  age: 62,
  address: {
    street: "Sienkiewicza",
    city: "Białystok",
  },
};

console.log(
  `Cześć nazywam się ${humanThree.name} i mam ${humanThree.age} lata. Mieszkam w ${humanThree.address.city} na ulicy ${humanThree.address.street}.`
);

const info = (name, age, city, street) => {
  console.log(
    `Cześć nazywam się ${name} i mam ${age} lata. Mieszkam w ${city} na ulicy ${street} }.`
  );
};
info(
  humanThree.name,
  humanThree.age,
  humanThree.address.city,
  humanThree.address.street
);
info("imię", "wiek", "miasto", "ulica");

console.log(typeof 2);
console.log(typeof "2");

if (humanOne.age > humanTwo.age) {
  console.log("Human One jest starszy");
}

if (humanOne.age < humanTwo.age) {
  console.log("Human Two jest starszy");
}

if (humanThree.age === 62 && humanTwo.address) {
  console.log("to się wykona");
}

if (humanThree.age === 62 || humanTwo.pet) {
  console.log("to się wykona");
}

if (!("JavaScript" == "Java")) {
  console.log("to się wykona");
}

if (humanOne.age > humanTwo.age) {
  console.log("Human One jest starszy");
} else if (humanOne.age === humanTwo.age) {
  console.log("są równolatkami");
} else if (humanOne.age === 32) {
  console.log("human one ma 32 lata");
} else {
  console.log("Human Two jest starszy");
}

const myNumber = { name: "szymon" };
switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}

if (32 > 20) {
  console.log("to prawda");
} else {
  console.log("to nieprawda");
}

const result1 =
  32 > 20 ? console.log("to prawda") : console.log("to nieprawda");

console.log(result1);

const result = humanOne.age < humanThree.age ? age : false;

console.log(result);

/* zmiana nagłówka */
const btn = document.querySelector(".change__button--js");

/* wersja 1,funkcja strzałkowa: const handleClick = () =>, */
function handleClick() {
  console.log("click click");
  const head = document.querySelector(".change__heading--js");
  head.innerHTML = "hello there I'm JS what's your name? ";
}
btn.addEventListener("click", handleClick);

/*wersja 2*/
btn.addEventListener("click", () => {
  console.log("click click");
  const head = document.querySelector(".change__heading--js");
  head.innerHTML = "hello there I'm JS what's your name? ";
});
