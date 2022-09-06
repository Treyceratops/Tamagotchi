/*----- constants -----*/



/*----- app's state (variables) -----*/

let hunger = '';
let sleepiness = '';
let boredom = '';

/*----- cached element references -----*/

const hungerDiv = document.querySelector('.hunger-state');
const sleepinessDiv = document.querySelector('.sleepiness-state');
const boredomDiv = document.querySelector('.boredom-state');

const feedBtn = document.querySelector('.hunger-btn');
const sleepBtn = document.querySelector('.sleepiness-btn');
const boredomBtn = document.querySelector('.boredom-btn');

/*----- event listeners -----*/

feedBtn.addEventListener('click', subHunger);
sleepBtn.addEventListener('click', subSleepiness);
boredomBtn.addEventListener('click', subBoredom);

/*----- functions -----*/

function subHunger() {

};

function subSleepiness () {

};

function subBoredom() {

};

function render() {
    hungerDiv.innerHTML = `Hunger: ${hunger}`;
    sleepinessDiv.innerHTML = `Sleepiness: ${sleepiness}`;
    boredomDiv.innerHTML = `Boredom: ${boredom}`;
};

function init() {
    hunger = 0;
    sleepiness = 0;
    boredom = 0;
    render();
};

init();