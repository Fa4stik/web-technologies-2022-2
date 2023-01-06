// Task #1
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

function pickPropArray (arr, key) {
    return students
        .map(column => column[key])
        .filter(Boolean)
}

const result = pickPropArray(students, 'name')

console.log(result) // [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]

// Task #2
function createCounter() {
    count = 0;
    return function () {
        console.log(++count);
    }
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1
counter2(); // 2

// Task #3
function spinWords (str) {
    let words = str.split(' ');
    let reversStr = '';
    words.forEach(word => {
        if (word.length>=5) {
            reversStr+=word.split('').reverse().join('') + " ";
            return;
        }
        reversStr+=word + " ";
    });
    return reversStr;
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

// Task #4
function getIndex (nums, target) {
    for (let i = 0; i<nums.length-1; i++)
        for (let j = i+1; j<nums.length; j++)
            if (nums[i] + nums[j] === target)
                return [i, j]
}

const result1 = getIndex([2,7,11,15], 9)
console.log(result1); // 9

const result2 = getIndex([8,7,11,15], 9)
console.log(result2); // undefined

// Task #5
function slidingWindow(words) {
    let max = 0;
    let maxPrefix = '';

    words.forEach(word => {
        for (let i=0; i<word.length-1; i++) {
            if (word[i+1] === " ") {
                i += 1;
                continue;
            }
            let count = 0;
            let prefix = word.substr(i, 2)
            words.forEach(checkWord => {
                if (checkWord.includes(prefix))
                    count++;
            })

            if (count > max && count > 1) {
                max = count;
                maxPrefix = prefix;
            }
        }
    })

    return maxPrefix;
}

const result1 = slidingWindow(["цветок", "поток", "хлопок"]);
console.log(result1); // ок

const result2 = slidingWindow(["flower", "bume", "pilet"]);
console.log(result2); // ""

const result3 = slidingWindow(["dog", "racecfr", "car"]);
console.log(result3); // ""

const result4 = slidingWindow(["собака","гоночная машина","машина"]);
console.log(result4); // na