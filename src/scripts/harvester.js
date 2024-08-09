

export const harvestPlants = (arr) => {
  const harvestedPlants = [];
  for (const plant of arr) {
    let length = plant.output;
    if (plant.type === 'Corn') {
      length = length / 2;
    }
    for (let i = 0; i < length; i++) {
      harvestedPlants.push({...plant});
    }
  }

let counter = 1
harvestedPlants.forEach(plant => {
    plant.id = counter
    console.log(plant)
    counter++
    return plant
  })
  console.log(harvestedPlants)
  return harvestedPlants;
};
