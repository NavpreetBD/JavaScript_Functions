console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0){
        count = count * -1;
    }
    for (let i = 0; i <= count; i++) {
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(-20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge( age = 0, userName = "guest"){
    let aboveSixteen = `You can drive, ${userName}!`;
    let belowSixteen = `Sorry, ${userName} but you need to wait until  you're 16.`;
    if ( age >= 16){
        console.log(aboveSixteen);
    }else {
        console.log(belowSixteen);
    }
}

function checkAge() {
    let userName = prompt ("What is you name ?");
    let age = prompt ("What is your age?");
    let aboveSixteen = `You can drive, ${userName}!`;
    let belowSixteen = `Sorry, ${userName} but you need to wait until you're 16`;
    if (age >= 16){
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge();

//Exercise 3
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y){
    if ( x > 0 && y > 0) {
        console.log(`${x}, ${y} is in Quardrant 1`);
    } else if (x < 0 && y > 0){
        console.log(`${x}, ${y} is in Quardrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`${x}, ${y} is in Quardrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`${x}, ${y} is in Quardrant 4`);
    } else if (x != 0 && y == 0) {
        console.log(`${x}, ${y} is on the x-axis`);
    } else if (x == 0 && y != 0) {
        console.log(`${x}, ${y} is on the y-axis`);
    } else {
        console.log(`${x}, ${y} is on the origin`);
    }
}

whichQuadrant(0, 2);
whichQuadrant(1, 2);
whichQuadrant(-6, 18);

whichQuadrant(1, 1); // quad 1
whichQuadrant(-1, 2); //2 
whichQuadrant(-1, -1);  // 3
whichQuadrant(1, -2);  //4

whichQuadrant(0, 1); //y-axis
whichQuadrant(1, 0); //x-axis

whichQuadrant(0, 0); // on origin

// Exercise 4
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle (side1, side2, side3){
    let isValid = false;
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 +side3 > side2){
        isValid = true;
    }
    if(isValid){
        if (side1 == side2 && side2 == side3){
            console.log(
                `Sides ${side1}, ${side2}, ${side3} from an equilateral triangle`
            );
        } else if (side1 == side2 || side2 == side3 || side1 ==side3){
            console.log(
                `Sides ${side1}, ${side2}, ${side3} from an isosceles triangle`
            );
        } else {
           console.log( `Sides ${side1}, ${side2}, ${side3} from an scalene triangle`);
        }
    }
    if (isValid == false){
        console.log("Sorry, invalid triangle");
    }
}

typeOfTriangle(2,2,2);
typeOfTriangle(1,2,2);
typeOfTriangle(1,1,2);
typeOfTriangle(2,3,4);

typeOfTriangle(2,1,2);

//Exercise 5
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usuage){
    let daysLeftOnPlan = 30 - day;
    let averageDailyUse = usuage /day ;
    let suggestedAverageUse = planLimit /30;
    let howMuchDataLeft = planLimit - usuage;
    let projectedUsuage = Math.abs(planLimit - (averageDailyUse * 30));
    let suggestedUsuage = howMuchDataLeft / daysLeftOnPlan;

    if (averageDailyUse > suggestedAverageUse){
        console.log(`${day}day(s) used, ${daysLeftOnPlan}day(s) remaining
        What you are using: ${averageDailyUse.toFixed(2)} GB/day.
        You are EXCEEDING your average daily use/
        What you should use: (${suggestedAverageUse.toFixed(2)} GB/day),
        continuing this high usuage, you will exceed your data plan by
        ${projectedUsuage.toFixed(2)} GB.
        To stay below your data plan, use no more than ${suggested.toFixed(2)} GB/day.`);
    }
    else if ( averageDailyUse < suggestedAverageUse){
        console.log(`${day} days used, ${daysLeftOnPlan} days remaining 
        Average daily use: ${averageDailyUse.toFixed(2)}
        You are UNDER your average daily use (${averageDailyUse.toFixed(2)} GB/day),
        continuing this usuage, you'll be under your data plan by
        ${projectedUsuage} GB.`);
    }
    else{
        console.log(`Your average daily use is ${averageDailyUse.toFixed(2)} GB/day, You are on target with your plan!`);

    }
}
dataPlan(50, 12, 25);
dataPlan(50, 15, 25);
dataPlan(50, 10, 25);
dataPlan(100, 15, 5);
