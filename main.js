let body = document.querySelector("body")
body.style.cssText = `height: ${window.innerHeight};`;

let color = document.querySelectorAll('[class="color colorTheme"]');
let sitting = document.querySelector('.sitting i')
let theme = document.querySelector('.theme')
let themSpace = document.querySelector('.themeSpace');

theme.addEventListener('click', () => {
    themSpace.classList.toggle('themeSpace');
    document.querySelector('.params').classList.toggle('params')
})

color.forEach((ele) => {
    ele.addEventListener('click', () => {
        let dataMainColor = ele.getAttribute('data-maincolor');
        let dataSecondColor = ele.getAttribute('data-secondcolor');
        
        console.log(dataMainColor)
        if(dataMainColor == '#2b2b2b') {
            document.querySelector(":root").style.setProperty('--text-color','white');
        } else {
            document.querySelector(":root").style.setProperty('--text-color','#2b2b2b');
        }
        document.querySelector(':root').style.setProperty('--main-color', dataMainColor);
        document.querySelector(':root').style.setProperty('--second-color', dataSecondColor);
    })
})