import { harvestedPlants } from './main.js';

export const Catalog = (harvestedPlants) => {
  const mainElement = document.querySelector('.container');
  let html = '';
  for (const plant of harvestedPlants) {
    html += `
         <section class="plant">${plant.type}</section>
         `;
  }
  mainElement.innerHTML = html;
};
