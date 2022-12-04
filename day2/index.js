const fs = require('fs');
const path = require('path');

const SHAPES = {
    X: 'rock',
    Y: 'paper',
    Z: 'scissors',
    A: 'rock',
    B: 'paper',
    C: 'scissors'
};

const OUTCOMES = {
    X: 'LOSE',
    Y: 'DRAW',
    Z: 'WIN'
};

const SHAPE_OUTCOME_MAP = {
    rock: {
        WIN: 'paper',
        DRAW: 'rock',
        LOSE: 'scissors'
    },
    paper: {
        WIN: 'scissors',
        DRAW: 'paper',
        LOSE: 'rock'
    },
    scissors: {
        WIN: 'rock',
        DRAW: 'scissors',
        LOSE: 'paper'
    }
};

const SCORES = {
    rock: 1,
    paper: 2,
    scissors: 3
};

const OUTCOME_SCORE = {
    WIN: 6,
    DRAW: 3,
    LOSE: 0
};

function parseData() {
    return fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
}

function calculateOutcome(moves) {
    if (!moves) {
        return 0;
    }
    const [opponent, player] = moves.split(' ');
    if (SHAPES[player] === SHAPES[opponent]) {
        return OUTCOME_SCORE.DRAW + SCORES[SHAPES[player]];
    }
    if (SHAPES[player] === SHAPES.X) {
        if (SHAPES[opponent] === SHAPES.B) {
            return OUTCOME_SCORE.LOSE + SCORES[SHAPES[player]];
        }
        return OUTCOME_SCORE.WIN + SCORES[SHAPES[player]];
    }
    if (SHAPES[player] === SHAPES.Y) {
        if (SHAPES[opponent] === SHAPES.C) {
            return OUTCOME_SCORE.LOSE + SCORES[SHAPES[player]];
        }
        return OUTCOME_SCORE.WIN + SCORES[SHAPES[player]];
    }
    if (SHAPES[player] === SHAPES.Z) {
        if (SHAPES[opponent] === SHAPES.A) {
            return OUTCOME_SCORE.LOSE + SCORES[SHAPES[player]];
        }
        return OUTCOME_SCORE.WIN + SCORES[SHAPES[player]];
    }
}

function start1() {
    console.log(
        parseData()
            .split('\n')
            .reduce((score, round) => score + calculateOutcome(round), 0)
    );
}

const timeStart1 = Date.now();
start1();
console.log(`Finished part 1 in ${Date.now() - timeStart1}ms`);

function calculateOutcome2(round) {
    if (!round.length) {
        return 0;
    }
    const [opponent, outcome] = round.split(' ');
    return OUTCOME_SCORE[OUTCOMES[outcome]] + SCORES[SHAPE_OUTCOME_MAP[SHAPES[opponent]][OUTCOMES[outcome]]];
}

function start2() {
    console.log(
        parseData()
            .split('\n')
            .reduce((score, round) => score + calculateOutcome2(round), 0)
    );
}

const timeStart2 = Date.now();
start2();
console.log(`Finished part 2 in ${Date.now() - timeStart2}ms`);
