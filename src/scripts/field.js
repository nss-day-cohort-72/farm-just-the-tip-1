
const field = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    seed.forEach((seed) => field.push(seed));
  } else {
    field.push(seed);
  }
};

export const usePlants = () => {
  return field.map((item) => item);
};




