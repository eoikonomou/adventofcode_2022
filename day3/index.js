const { parseData } = require('../utils');

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const PRIORITIES = ALPHABET.reduce((priorities, letter, index) => ({
    ...priorities,
    [letter]: index + 1,
    [letter.toUpperCase()]: index + 1 + ALPHABET.length
}), {});

function startPart1() {
    const data = parseData('day3');
    console.log(
        data
            .split('\n')
            .reduce((sum, rucksack) => {
                const compartment1 = rucksack.slice(0, rucksack.length / 2).split('');
                const compartment2 = rucksack.slice(rucksack.length / 2, rucksack.length).split('');
                const commonLetter = compartment1.find(item => compartment2.includes(item));
                if (!commonLetter) {
                    return sum;
                }
                return sum + PRIORITIES[commonLetter];
            }, 0)
    );
}

function startPart2() {
    const data = parseData('day3');
    const groups = [];
    data.split('\n').forEach((rucksack, index) => {
        if (rucksack.length) {
            if (index === 0 || index % 3 === 0) {
                groups.push([]);
            }
            groups[groups.length - 1].push(rucksack.split(''));
        }
    });
    const badges = groups.map(group => group[0].find(letter => group[1].includes(letter) && group[2].includes(letter)));
    console.log(badges.reduce((sum, badge) => (sum + PRIORITIES[badge]), 0));
}

const timeStartPart1 = Date.now();
startPart1();
console.log(`Finished part 1 in ${Date.now() - timeStartPart1}ms`);

const timeStartPart2 = Date.now();
startPart2();
console.log(`Finished part 2 in ${Date.now() - timeStartPart2}ms`);
