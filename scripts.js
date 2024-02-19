const body = document.querySelector('body');

const bodyColor = document.querySelector('.body-color');
const link = document.querySelector('.tel-link');


bodyColor.addEventListener(('click'), function () {
    if(body.style.getPropertyValue('background-color')==='rgb(204, 204, 204)'){
        body.style.backgroundColor = 'white';
  
      }
         else
         {
        body.style.backgroundColor = 'hsl(0,0%,80%)';
  
         }
});


