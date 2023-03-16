'use strict';

{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Click');
  });

  document.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
  });

  document.addEventListener('keydown', (e) => {
    console.log(e.key);
  });
}
