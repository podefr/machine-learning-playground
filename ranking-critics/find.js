const recommendations = require('./recommendations.json');

const me = {
    "Lady in the Water": 1.5,
    "Snakes on a Plane": 4.5,
    "Just My Luck": 2.5,
    "Superman Returns": 5.0,
    "The Night Listener": 0.5,
    "You, Me and Dupree": 2.5
};

function euclidianDistance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function compareCritics(criticA, criticB) {
    const allFilms = Object.keys(criticA).concat(Object.keys(criticB));

    const sum = allFilms
            .filter(film => film in criticA && film in criticB)
            .reduce((memo, film) => {
                memo += Math.sqrt(Math.pow(criticA[film] - criticB[film] ,2));
                return memo;
            }, 0);

    return 1/(1+sum);
}

console.log("demo", compareCritics(recommendations["Gene Seymour"], recommendations["Lisa Rose"]));

console.log(compareCritics(me, recommendations["Lisa Rose"]));
console.log(compareCritics(me, recommendations["Gene Seymour"]));
console.log(compareCritics(me, recommendations["Michael Phillips"]));
console.log(compareCritics(me, me));

Object.keys(recommendations).forEach(critic => {
    console.log(critic, compareCritics(me, recommendations[critic]));
})

const sortedCritics = Object.keys(recommendations).sort((criticA, criticB) => {
        return compareCritics(me, recommendations[criticA]) - compareCritics(me, recommendations[criticB]);
    });

console.log(sortedCritics);