import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createPotato } from './seeds/potato.js';
import { createCorn } from './seeds/corn.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';


const yearlyPlan = createPlan();

console.log('Welcome to the main module');

console.log(yearlyPlan);


