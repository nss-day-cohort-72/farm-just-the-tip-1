export const Catalog = (harvestedPlants) => {
  let html = '';
  const plantTypeArr = [];
  for (const plant of harvestedPlants) {
    plantTypeArr.push(plant.src);
  }

  const sortedPlantTypes = plantTypeArr.sort();
  for (const plant of sortedPlantTypes) {
    html += `
         <img src="${plant}" class="plant">
         `;
  }
  return html;
};
