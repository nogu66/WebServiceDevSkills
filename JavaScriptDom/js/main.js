'use strict';

{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Click');
  });

  document.addEventListener('mousemove', () => {
    console.log('moved!');
  });
}
