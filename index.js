const robot = document.querySelector('.robot');

// бу йерга роботни чап тарафга сизжатиш йоли коритилган  
// сизни ишингиз right top bottom кнопкаларини кошиш ва роботни бугун екран бойлап сайр килдириш омад)))))


var number = 0;

function moveRobot() {
    //add code here
    number += 50;
    console.log(number);
    robot.style.left = number + 'px';
}
function moveRobotRight() {
    number -= 50;
    console.log(number);
    robot.style.left = number + 'px';
}

function moveRobotTop() {
    number -= 20;
    console.log(number);
    robot.style.top = number + 'px';
}

function moveRobotBotoom() {
    number += 20;
    console.log(number);
    robot.style.top= number + 'px';
}