export const catalogIcons = (harvestedPlants) => {
  let html = '';
  const plantTypeArr = [];
  for (const plant of harvestedPlants) {
    plantTypeArr.push(plant.icon);
  }

  const sortedPlantTypes = plantTypeArr.sort();
  for (const plant of sortedPlantTypes) {
    console.log(plant)
    html += `
         <img src="${plant}" class="plant-icon">
         `;
  }
  return html;
};
