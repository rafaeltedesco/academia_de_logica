const person = {
    name: "Adryan",
    age: 20,
}

const addIsAdult = (person) => {
    person.isAdult = person.age >= 18;
    return person;
}

const newPerson = addIsAdult(person);

console.log(newPerson);

const concactArrays = (...arrays) => {
    let _arrays = [];
    for (let array of arrays) {
        _arrays = [..._arrays, ...array];
    };
    return _arrays;
};

const arraysCombinados = concactArrays([1, 2, 3], [4, 5], [6, 7, 8]);

console.log(arraysCombinados);