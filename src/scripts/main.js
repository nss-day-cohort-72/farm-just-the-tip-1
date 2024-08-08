import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';
// Yearly plan//
const yearlyPlan = createPlan();
// Planting seeds//
plantSeeds(yearlyPlan);
//Plants array
const plantsArr = usePlants();

//Harvesting plants
export const harvestedPlants = harvestPlants(plantsArr);

Catalog(harvestedPlants);
