export const harvestPlants = (arr) => {
  const harvestedPlants = [];

  for (const plant of arr) {
    let length = plant.output;
    if (Array.isArray(plant)) {
      for (const corn of plant) {
        console.log('Corn output :' + corn.output);

        let cornLength = corn.output / 2;
        for (let i = 0; i < cornLength; i++) {
          harvestedPlants.push(corn);
        }
      }
    }
    // if (plant.type === 'Corn') {
    //   length = length / 2;
    // }
    //     for (let i = 0; i < length; i++) {
    //       harvestedPlants.push(plant);
    //     }
    //   }
  }
  return harvestedPlants;
};
