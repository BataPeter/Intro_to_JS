console.log ('helloWorld');

 const name ="John";
 const age = 30;
 const rating =4.5;
 const isCool = true;
 const x= null;
 const y = undefined;
 let z;
 //concatenation
 console.log('My name is '  + name + ' and I am '  + age);
 //const hello = 'My name is ${name}' and I am ${age};
 //console.log(hello)
 
 console.log (typeof name);
 console.log (age);
 console.log (rating)
 console.log (x)
 console.log (y)
 console.log (z)

 console.log (typeof isCool)

 //const s = 'Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you.';
 //console.log(s.length)
 const s ='Goodmorning'
 console.log (s.toUpperCase())
 console.log (s.toLowerCase())
 console.log (s.substring(0, 5).toUpperCase())
console.log(s.split(''));

const p = 'technology, computers, it, code, programming, engineering';
console.log(p.split(', '))

/*Arrays- variables that hold multiple values*/
//Arrays are 0 based. start counting from zero
//const fruits=[''apples', 'oranges', 'pears'];

const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city:'Boston',
        state: 'MA'
    }
}
console.log(person.hobbies[1])
console.log(person.firstName, person.lastName, person.age, person.hobbies)
console.log (person.address)