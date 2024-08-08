
import { createSoybean } from './seeds/soybean.js';
import { createPotato } from './seeds/potato.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createWheat } from './seeds/wheat.js';
import { createCorn } from './seeds/corn.js';
import { createSunflower } from './seeds/sunflower.js';
import { addPlant } from './field.js';

export const plantSeeds = (plan) => {
  for (const rowArr of plan) {
    for (const row of rowArr) {
      if (row === 'Soybean') {
        addPlant(createSoybean());
      } else if (row === 'Potato') {
        addPlant(createPotato());
      } else if (row === 'Asparagus') {
        addPlant(createAsparagus());
      } else if (row === 'Wheat') {
        addPlant(createWheat());
      } else if (row === 'Corn') {
        addPlant(createCorn());
      } else if (row === 'Sunflower') {
        addPlant(createSunflower());
      }
    }
  }
};

