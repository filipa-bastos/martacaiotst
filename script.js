const element = document.getElementById('middle');
const elementRect = element.getBoundingClientRect();
const absoluteElementTop = elementRect.top + window.scrollY;
const middle = absoluteElementTop - (window.innerHeight / 2);

function Scrolldown() {
    window.scroll(0,middle); 
}

window.onload = Scrolldown;