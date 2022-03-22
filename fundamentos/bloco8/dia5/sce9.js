
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};


const seasons = { spring, summer, autumn, winter } = yearSeasons

// console.log(seasons);


const months = [...spring, ...summer, ...autumn, ...winter]

console.log(months);

  