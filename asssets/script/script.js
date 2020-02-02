const parallax = document.querySelector('.image');

parallax.style.backgroundPositionY = '0px';

window.addEventListener('scroll',() => {
    let offset = window.pageYOffset;
    //console.log(parallax.style.backgroundPositionY);
    parallax.style.backgroundPositionY = -offset*0.5 +'px';
    //console.log(parallax.style.backgroundPositionY);
});

const toggleElemenetList = Array.from( document.getElementsByClassName('innerblock') );
//console.log(toggleElemenetList);

const toggleHandler = (element) => {
    element.target.nextElementSibling.classList.toggle('magic');
}

toggleElemenetList.forEach( element => {
    element.addEventListener('click', toggleHandler.bind(this));
});

const blockList = Array.from(document.querySelectorAll('.innerblock'));
console.log(blockList);

for( let i = 0 ; i< blockList.length ;i++){
    if(i%2==0){
        blockList[i].style.left = "-100%";
    }
}