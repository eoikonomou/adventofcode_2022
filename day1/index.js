const { parseData } = require('../utils');

function computeData() {
    const data = parseData('day1');
    const dataArray = data.split('\n');
    let index = 0;
    const computedArray = dataArray.reduce((result, currentValue) => {
        if (currentValue.length) {
            result[index].push(currentValue);
        } else {
            index++;
            result[index] = [];
        }
        return result;
    }, [[]]);
    return computedArray;
}

function start() {
    const calorieData = parseData().map(arr => arr.reduce((sum, current) => sum + Number(current), 0));
    calorieData.sort((a, b) => b - a);
    console.log(`Max calories: ${calorieData[0]}`);
    console.log(`Total of top three calories: ${calorieData[0] + calorieData[1] + calorieData[2]}`);
}

const timeStart = Date.now();
start();
console.log(`Finished in ${Date.now() - timeStart}ms`);
