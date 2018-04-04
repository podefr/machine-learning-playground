const draws = require('./last-draws.json');

const testedNumbers = process.argv.slice(2);

const maps = {};

draws.forEach(draw => {
    draw.slice(1).forEach(number => {
       maps[number] = typeof maps[number] === "undefined" ? 0 : maps[number] + 1;
    });
});

const sortedNumbers = getMapAsSortedEntries(maps);

for (let i = 1; i < 78; i++) {
    if (!maps[i]) {
        console.log(`${ i } wasn't found!`);
    } else {
        console.log(`${ i } was found`);
    }
}

function getMapAsSortedEntries(mapToSort) {
    return Object.keys(mapToSort)
        .map(key => ({
            key, value: maps[key]
        }))
        .sort(sortyByEntry);
}

function sortyByEntry(entryA, entryB) {
    return entryA.value - entryB.value;
}

function listOfEntriesToString(entries) {
    return entries.map(entry => `${ entry.key } (${ entry.value } times)`).join(", ");
}

console.log(`10 most seen: ${ listOfEntriesToString(sortedNumbers.slice(-10).reverse()) }`);
console.log(`10 least seen: ${ listOfEntriesToString(sortedNumbers.reverse().slice(-10)) }`);

console.log('Your numbers were seen before');
testedNumbers.forEach(number => console.log(`   ${ number }: ${ maps[number] } times`));
