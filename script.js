const slider = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});


const mountain1 = document.querySelector('#mountain1')
const mountain2 = document.querySelector('#mountain2')
const climb = document.querySelector('#climb')
const info = document.querySelector('.info')
var infoDiv = document.querySelector('.info');



  
    
   
 


const tabTwo = () => {
   var newInnerHTML = '<h2>SCHEDULE</h2><p>15 Dec 2016 ......................... Vestibulum viverra</p><p>16 Nov 2016 ......................... Vestibulum viverra</p><br><p>08 Dec 2016 ......................... Vestibulum viverra</p><br><p>07 Jan 2017 ......................... Vestibulum viverra</p>';
   
   climb.style.backgroundImage="url(./assets/mountain4.png)" 
    infoDiv.innerHTML = newInnerHTML;
}

const tabOne = () => {
    var newInnerHTML = '<h2>SCHEDULE</h2><p>25 Nov 2016 ......................... Vestibulum viverra</p><p>28 Nov 2016 ......................... Vestibulum viverra</p><br><p>18 Dec 2016 ......................... Vestibulum viverra</p><br><p>07 Jan 2016 ......................... Vestibulum viverra</p>';
    
    climb.style.backgroundImage="url(./assets/mountain3.png)" 
     infoDiv.innerHTML = newInnerHTML;
 }
 



mountain2.addEventListener('click', tabTwo )
mountain1.addEventListener('click', tabOne )