/*----- constants -----*/

// const death = prompt('Your Tamagotchi died of neglect.');

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

function addHunger() {
    hunger += 1;
    die();
    render();
};

function addSleepiness() {
    sleepiness += 1;
    die();
    render();
};

function addBoredom() {
    boredom += 1;
    die();
    render();
};

function subHunger() {
    if(hunger > 0) {
    hunger = hunger - 1;
    render();
    }
};

function subSleepiness () {
    if(sleepiness > 0) {
    sleepiness -= 1;
    render();
    }
};

function subBoredom() {
    if(boredom > 0) {
    boredom -= 1;
    render();
    }
};

function render() {
    hungerDiv.innerHTML = `Hunger: ${hunger}`;
    sleepinessDiv.innerHTML = `Sleepiness: ${sleepiness}`;
    boredomDiv.innerHTML = `Boredom: ${boredom}`;
};

function die() {
    if (hunger > 20) {
        alert('Your Tamagotchi died of neglect.');
        init();
    } if (sleepiness > 20) {
			alert('Your Tamagotchi died of neglect.');
            init();
	} if (boredom > 20) {
		alert('Your Tamagotchi died of neglect.');
        init();
	} 
};

function init() {
    hunger = 0;
    sleepiness = 0;
    boredom = 0;
    render();
    setInterval(addHunger, 1000);
    setInterval(addSleepiness, 6000);
    setInterval(addBoredom, 3000);
};

init();