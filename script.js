const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const container4 = document.getElementById('container4');
const container5 = document.getElementById('container5');
const container6 = document.getElementById('container6');

const btn = document.getElementById('btn');
const btnNao = document.getElementById('btnNao')
const btn2 = document.getElementById('btn2');
const btnNao2 = document.getElementById('btnNao2')
const btn3 = document.getElementById('btn3');
const btnNao3 = document.getElementById('btnNao3')
const btn4 = document.getElementById('btn4');
const btnNao4 = document.getElementById('btnNao4')
const btn5 = document.getElementById('btn5');
const btnNao5 = document.getElementById('btnNao5');

btn.onclick = () =>{
    container.style.display = 'none';
    if (container.style.display === 'none') {
        container2.style.display = 'flex';
        container3.style.display = 'none';
        container4.style.display = 'none';
        container5.style.display = 'none';
        container6.style.display = 'none';
    }

}


btn2.onclick = () =>{
    container2.style.display = 'none';
    if (container2.style.display === 'none') {
        container3.style.display = 'flex';
        container.style.display = 'none';
        container4.style.display = 'none';
        container5.style.display = 'none';
        container6.style.display = 'none';
    }

}

btnNao2.onclick = () =>{
    container2.style.display = 'none';
    if (container2.style.display === 'none') {
        container3.style.display = 'flex';
        container.style.display = 'none';
        container4.style.display = 'none';
        container5.style.display = 'none';
        container6.style.display = 'none';
    }

}

btn3.onclick = () =>{
    container3.style.display = 'none';
    if (container3.style.display === 'none') {
        container2.style.display = 'none';
        container.style.display = 'none';
        container4.style.display = 'flex';
        container5.style.display = 'none';
        container6.style.display = 'none';
    }

}

btnNao3.onclick = () =>{
    container3.style.display = 'none';
    if (container3.style.display === 'none') {
        container2.style.display = 'none';
        container.style.display = 'none';
        container4.style.display = 'flex';
        container5.style.display = 'none';
        container6.style.display = 'none';
    }

}

btn4.onclick = () =>{
    container4.style.display = 'none';
    if (container4.style.display === 'none') {
        container2.style.display = 'none';
        container.style.display = 'none';
        container3.style.display = 'none';
        container5.style.display = 'flex';
        container6.style.display = 'none';
    }

}

btnNao4.onclick = () =>{
    container4.style.display = 'none';
    if (container4.style.display === 'none') {
        container2.style.display = 'none';
        container.style.display = 'none';
        container3.style.display = 'none';
        container5.style.display = 'flex';
        container6.style.display = 'none';
    }

}

btn5.onclick = () =>{
    container5.style.display = 'none';
    if (container5.style.display === 'none') {
        container2.style.display = 'none';
        container.style.display = 'none';
        container3.style.display = 'none';
        container5.style.display = 'none';
        container6.style.display = 'flex';
    }

}

btnNao5.onclick = () =>{
    container5.style.display = 'none';
    if (container4.style.display === 'none') {
        container2.style.display = 'none';
        container.style.display = 'none';
        container3.style.display = 'none';
        container5.style.display = 'none';
        container6.style.display = 'flex';
    }

}

const queryString = window.location.search;
console.log(queryString);

function getParams() {
    window.open('https://sistema7k.com/n-vsl/' + `${queryString}`);
}
