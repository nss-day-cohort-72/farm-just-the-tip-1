const field = [];

export const addPlant = (seed) => {
  field.push(seed);
};

export const usePlants = () => {
  return field.map((item) => item);
};
