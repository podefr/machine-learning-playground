const draws = require('./last-draws.json');

const testedNumbers = process.argv.slice(2);

console.log(`testing numbers ${ testedNumbers.slice(0, 5).join(', ') } with powerball: ${ testedNumbers[5] }`);
console.log(`testing within ${ draws.length } draws between ${ draws[0][0] } and ${ draws[draws.length - 1][0] } `);

const predicate = commaSeparatedNumbers(testedNumbers.slice(0,6));

let found;

draws.some((draw, idx) => {
    const currentDraw = commaSeparatedNumbers(draw.slice(1));
    const isMatch = currentDraw === predicate;

    if (isMatch) {
        console.log(`Match found! #${ idx } : ${ draw.join(", ") }`);
        found = draw;
    } else {
        console.log(`testing ${ currentDraw } with ${ predicate }... ${ isMatch ? 'MATCH FOUND' : 'NOP' }`);
    }

    return isMatch;
});

if (!found) {
    console.log('No matches found!')
}

function commaSeparatedNumbers(list) {
    return list.map(Number).sort((a, b) => a - b).join(",");
}