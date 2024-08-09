import { harvestedPlants } from './main.js';

export const Catalog = (harvestedPlants) => {
  let html = '';
  const plantTypeArr = [];
  for (const plant of harvestedPlants) {
    plantTypeArr.push(plant.type);
  }

  const sortedPlantTypes = plantTypeArr.sort();
  for (const plant of sortedPlantTypes) {
    html += `
         <section class="plant">${plant}</section>
         `;
  }
  return html;
};
