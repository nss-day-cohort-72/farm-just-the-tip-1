export const harvestPlants = (arr) => {
  const harvestedPlants = [];

  for (const plant of arr) {
    let length = plant.output;
    if (Array.isArray(plant)) {
      for (const corn of plant) {
        let cornLength = corn.output / 2;
        for (let i = 0; i < cornLength; i++) {
          harvestedPlants.push(corn);
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        harvestedPlants.push(plant);
      }
    }
  }

  return harvestedPlants;
};
