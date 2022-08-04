const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
// const characterNames = characters.map(character => { return character.name });
// console.log(characterNames);
//2. Get array of all heights
// const characterHeight = characters.map(character => { return character.height });
// console.log(characterHeight);
//3. Get array of objects with just name and height properties
// const characterNameHeight = characters.map(character => { return { name: character.name, height: character.height } });
// console.log(characterNameHeight);
//4. Get array of all first names
// const characterHeightName = characters.map(character => { return character.name.split(" ")[0] });
// console.log(characterHeightName);

//***REDUCE***
//1. Get total mass of all characters
// const characterSumMass = characters.reduce((acc, cur) => acc + cur.mass, 0); //acc is the accumulator, 0 is the starting value
// console.log(characterSumMass)
//2. Get total height of all characters
// const characterSumHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// console.log(characterSumHeight)
//3. Get total number of characters by eye color
// const characterByEyeColor = characters.reduce((acc, cur) => {
//     if (acc[cur.eye_color]) {
//         acc[cur.eye_color]++
//     } else {
//         acc[cur.eye_color] = 1
//     }
//     return acc
// }
//     , {})
// console.log(characterByEyeColor);
//4. Get total number of characters in all the character names
// const sumTotalCharacter = characters.reduce((acc, cur) => acc + cur.name.length, 0);
// console.log(sumTotalCharacter)

//***FILTER***
//1. Get characters with mass greater than 100
// const filterMass = characters.filter(character => { return character.mass > 100 })
// console.log(filterMass);
//2. Get characters with height less than 200
// const filterHeight = characters.filter(character => { return character.height < 200 })
// console.log(filterHeight);
//3. Get all male characters
// const getMale = characters.filter(character => character.gender === "male")
// console.log(getMale)
//4. Get all female characters
// const getFemale = characters.filter(character => character.gender === "female")
// console.log(getFemale)

//***SORT***
//1. Sort by mass
// const sortMass = characters.sort((a, b) => a.mass - b.mass)
// console.log(sortMass)
//2. Sort by height
// const sortHeight = characters.sort((a, b) => a.height - b.height)
// console.log(sortHeight)
//3. Sort by name
// const sortName = characters.sort((a, b) => {
//     if (a.name < b.name) return -1
//     else return 1
// })
// console.log(sortName)
//4. Sort by gender
// const sortGender = characters.sort((a) => {
//     if (a.gender === 'female') return -1
//     else return 1
// })
// console.log(sortGender)

//***EVERY***
//1. Does every character have blue eyes?
// const isAllBlueEyes = characters.every(character => character.eye_color === 'blue')
// console.log(isAllBlueEyes)
//2. Does every character have mass more than 40?
// const isAllMass40 = characters.every(character => character.mass > 40)
// console.log(isAllMass40)
//3. Is every character shorter than 200?
// const isAllShort = characters.every(character => character.height < 200)
// console.log(isAllShort)
//4. Is every character male?
// const isAllMale = characters.every(character => character.gender === 'male')
// console.log(isAllMale)

//***SOME***
//1. Is there at least one male character?
//
//2. Is there at least one character with blue eyes?
// const atleastOneBlueEye = characters.some(character => character.eye_color === 'blue')
// console.log(atleastOneBlueEye)const atleastOneMale = characters.some(character => character.gender === 'male')
// console.log(atleastOneMale)
//3. Is there at least one character taller than 210?
// const atleastOneTallest = characters.some(character => character.height > 210)
// console.log(atleastOneTallest)
//4. Is there at least one character that has mass less than 50?
// const atleastOneShredded = characters.some(character => character.mass < 50)
// console.log(atleastOneShredded)