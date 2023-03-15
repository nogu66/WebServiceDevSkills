'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const item2 = document.createElement('li');
    item2.textContent = 'item:2';

    const ul = document.querySelector('ul');
    ul.appendChild(item2);
  });
}
