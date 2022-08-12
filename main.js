let sidebar = document.querySelector('.sidebar');
let toggle = document.querySelector('#toggleMode')
let sun = document.querySelector('.pageMode .fa-sun')
let moon = document.querySelector('.pageMode .fa-moon')
let mode ;

mode = localStorage.getItem('mode');
modeText(mode)
document.body.addEventListener('change',modeText(mode))

document.body.className = mode
sidebar.addEventListener('mouseover', () => {
    document.querySelector('.sidebar').style.cssText = `width: 250px;`
    document.querySelector('.sidebarTop div').style = `    
    width: 120px;
    transition: 0.2s ease 0.1s;
    `;
    let spans = document.querySelectorAll(".sidebarMiddle div span")
    spans.forEach((ele) => {
        ele.style.cssText =`
        `
    });
    document.querySelector('.sidebarBottom div').style.cssText = `
    width: 170px;
    `;
});


sidebar.addEventListener('mouseout', () => {
    document.querySelector('.sidebar').style.cssText = `width: 85px;`
    document.querySelector('.sidebarTop').style.cssText = `justify-content: flex-start;`;
    document.querySelector('.sidebarTop div').style = `    
    justify-content: start;
    align-items: flex-start;
    width: 42px;
    transition: 0.2s ease 0.3s;
    `;
    let spans = document.querySelectorAll(".sidebarMiddle div span")
    spans.forEach((ele) => {
        ele.style.cssText =`
        `
    });
    document.querySelector('.sidebarBottom div').style.cssText = `
    width: 0;
    transition: 0.6s 0.05s;
    `;
})

toggle.addEventListener('change', () => {
    mode = document.body.className = document.body.className == `dark` ? `light` : `dark`
    localStorage.setItem('mode', mode)
    sun.className = sun.className == `fa-solid fa-sun` ? `fa-regular fa-sun` : `fa-solid fa-sun`;
    moon.className = moon.className == `fa-solid fa-moon` ? `fa-regular fa-moon` : `fa-solid fa-moon`;
    modeText(mode)
})

function modeText(ele) {
    if(ele == 'dark') {
        document.querySelector('body .darkcontant').style.cssText = `    
        opacity: 1;
        `;
        document.querySelector('body .lightcontant').style.cssText = `    
        opacity: 0;
        `;
    }else {
        document.querySelector('body .lightcontant').style.cssText = `    
        opacity: 1;
        `
        document.querySelector('body .darkcontant').style.cssText = `    
        opacity: 0;
        `;
    }
}