const lang= document.getElementById('lang');
const hideFirst= document.getElementById('hideFirst');
const showSecond = document.getElementById('showSecond');
const showSecondNav = document.getElementById('showSecondNav');
const cursorLeftLang =document.getElementById('cursorLeftLang');

cursorLeftLang.addEventListener('click',prev);

hideFirst.addEventListener('click',hide);

function hide(){
        hideFirst.style.visibility="hidden";
        showSecond.style.visibility= "visible";
        showSecondNav.style.visibility="visible";
}

function prev(){
    hideFirst.style.visibility="visible";
    showSecond.style.visibility= "hidden";
    showSecondNav.style.visibility="hidden";
}