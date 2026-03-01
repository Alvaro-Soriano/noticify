const menuOpenButton = document.querySelector('.menuOpenButton');
const aside = document.querySelector('aside');


menuOpenButton.onclick = ()=>{
 aside.classList.toggle('navHidden');
}