
//Theme buttons
const redButton = document.querySelector('.themeRed');
const blueButton = document.querySelector('.themeBlue');
const greenButton = document.querySelector('.themeGreen');
const header = document.querySelector('.header');


let redTheme = () => {
    header.style.backgroundColor = '#8b1d22';
}
redButton.addEventListener('click', redTheme);

let BlueTheme = () => {
    header.style.backgroundColor = '#1d0090';
}
blueButton.addEventListener('click', BlueTheme);

let GreenTheme = () => {
    header.style.backgroundColor = '#00620b';
}
greenButton.addEventListener('click', GreenTheme);